import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {catalogue,parseTask,indexMarkdown,sections} from '../scripts/lib/catalogue.mjs';
import {validate} from '../scripts/validation/framework.mjs';
import {root,startTask,submissionPath,checkEvidence} from '../scripts/workbench.mjs';

function fixture(t) {
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'workbench-test-'));
  t.after(()=>fs.rmSync(dir,{recursive:true,force:true}));
  for(const file of ['START-HERE.md','ONBOARDING.md','MENTOR-GUIDE.md','company/PROFILE.yml','.github/PULL_REQUEST_TEMPLATE.md','exercises/demo/README.md']) {
    fs.mkdirSync(path.dirname(path.join(dir,file)),{recursive:true});fs.writeFileSync(path.join(dir,file),'Fixture\n');
  }
  fs.mkdirSync(path.join(dir,'curriculum/orientation'),{recursive:true});
  writeTask(dir,'ORI-001');
  index(dir);
  return dir;
}
function writeTask(dir,id,{prerequisites=[],status='active',extra=''}={}) {
  const text='---\nid: '+id+'\ntitle: Demo\nphase: ORI\nstatus: '+status+'\ntype: LEARN\ndifficulty: beginner\nguidance: GUIDED\nestimated_time: 30 minutes\nexercise: demo\nskills:\n  - reasoning\nprerequisites:'+(prerequisites.length?'\n'+prerequisites.map(p=>'  - '+p).join('\n'):' []')+'\n---\n\n'+sections.map(s=>'## '+s+'\n\nSpecific demo requirement.\n').join('\n')+'\ntask/<github-username>/ori-001-demo\n'+extra;
  fs.writeFileSync(path.join(dir,'curriculum/orientation',id+'.md'),text);
}
function index(dir) {fs.writeFileSync(path.join(dir,'CURRICULUM.md'),indexMarkdown(catalogue(dir),dir));}
test('real repository catalogue is internally valid',()=>assert.deepEqual(validate(root),[]));
test('restricted metadata accepts CRLF lists',()=>assert.deepEqual(parseTask('---\r\nid: ORI-001\r\nskills:\r\n  - git\r\n---\r\n').meta,{id:'ORI-001',skills:['git']}));
test('incorrect ID type reports error without crashing',t=>{const dir=fixture(t);const file=path.join(dir,'curriculum/orientation/ORI-001.md');fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace('id: ORI-001','id: []'));assert.match(validate(dir).join('\n'),/Invalid ID/);});
test('empty curriculum is not valid',t=>{const dir=fixture(t);fs.unlinkSync(path.join(dir,'curriculum/orientation/ORI-001.md'));assert.match(validate(dir).join('\n'),/No curriculum tasks/);});
test('exercise path traversal is rejected',t=>{const dir=fixture(t),task=catalogue(dir)[0];task.meta.exercise='../../outside';assert.throws(()=>startTask(dir,task,'alice'),/Invalid exercise/);});
test('duplicate and unsupported metadata reject',()=>{assert.throws(()=>parseTask('---\nid: A\nid: B\n---\n'),/Duplicate/);assert.throws(()=>parseTask('---\n  bad\n---\n'),/Unsupported/);});
test('minimal valid fixture',t=>assert.deepEqual(validate(fixture(t)),[]));
test('missing prerequisite produces actionable error',t=>{const dir=fixture(t);writeTask(dir,'ORI-001',{prerequisites:['ORI-099']});assert.match(validate(dir).join('\n'),/missing prerequisite ORI-099/);});
test('prerequisite cycles reject',t=>{const dir=fixture(t);writeTask(dir,'ORI-001',{prerequisites:['ORI-002']});writeTask(dir,'ORI-002',{prerequisites:['ORI-001']});assert.match(validate(dir).join('\n'),/cycle/);});
test('active tasks cannot depend on drafts',t=>{const dir=fixture(t);writeTask(dir,'ORI-001',{prerequisites:['ORI-002']});writeTask(dir,'ORI-002',{status:'draft'});assert.match(validate(dir).join('\n'),/inactive prerequisite/);});
test('unknown status rejects',t=>{const dir=fixture(t);writeTask(dir,'ORI-001',{status:'pretend'});assert.match(validate(dir).join('\n'),/Invalid status/);});
test('active task needs exercise contract',t=>{const dir=fixture(t);fs.unlinkSync(path.join(dir,'exercises/demo/README.md'));assert.match(validate(dir).join('\n'),/missing exercise contract/);});
test('missing sections reject',t=>{const dir=fixture(t);const file=path.join(dir,'curriculum/orientation/ORI-001.md');fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace('## Objective','## Other'));assert.match(validate(dir).join('\n'),/section: Objective/);});
test('broken links reject; fenced examples ignored',t=>{const dir=fixture(t);fs.writeFileSync(path.join(dir,'START-HERE.md'),'[Bad](missing.md)');assert.match(validate(dir).join('\n'),/broken link/);const fence=String.fromCharCode(96).repeat(3);fs.writeFileSync(path.join(dir,'START-HERE.md'),fence+'\n[Example](missing.md)\n'+fence);index(dir);assert.deepEqual(validate(dir),[]);});
test('stale generated catalogue rejects',t=>{const dir=fixture(t);fs.appendFileSync(path.join(dir,'CURRICULUM.md'),'stale');assert.match(validate(dir).join('\n'),/Catalogue stale/);});
test('two interns have isolated folders; repeat start preserves work',t=>{const dir=fixture(t),task=catalogue(dir)[0];const first=startTask(dir,task,'Alice');const second=startTask(dir,task,'bob');assert.notEqual(first,second);fs.writeFileSync(path.join(first,'keep.txt'),'valuable');assert.throws(()=>startTask(dir,task,'alice'),/not overwritten/);assert.equal(fs.readFileSync(path.join(first,'keep.txt'),'utf8'),'valuable');assert.equal(checkEvidence(first).length,5);});
test('unsafe usernames and IDs reject',()=>{for(const user of ['../escape','a/b','a\\b','-bad','bad--name','a'.repeat(40),''])assert.throws(()=>submissionPath(root,user,'ORI-001'));assert.throws(()=>submissionPath(root,'alice','../ORI-001'));});
test('draft cannot create submission',t=>{const dir=fixture(t);const task=catalogue(dir)[0];task.meta.status='draft';assert.throws(()=>startTask(dir,task,'alice'),/Only active/);});
test('evidence requires all five populated headings',t=>{const dir=fixture(t);assert.deepEqual(checkEvidence(dir),['Missing README.md']);fs.writeFileSync(path.join(dir,'README.md'),['Outcome','Approach','Evidence','Reflection','AI Usage'].map(h=>'## '+h+'\n\nRecorded evidence.\n').join('\n'));assert.deepEqual(checkEvidence(dir),[]);});
test('symlink submission parent is refused',t=>{const dir=fixture(t),outside=path.join(dir,'outside');fs.mkdirSync(outside);try {fs.symlinkSync(outside,path.join(dir,'submissions'),process.platform==='win32'?'junction':'dir');} catch(error) {if(['EPERM','EACCES'].includes(error.code)){t.skip('OS does not permit symlink creation');return;}throw error;}assert.throws(()=>submissionPath(dir,'alice','ORI-001'),/symlink/);});
test('CLI list and issue are read-only; drafts rejected',()=>{const run=(...args)=>spawnSync(process.execPath,[path.join(root,'scripts/workbench.mjs'),...args],{encoding:'utf8',timeout:10000});assert.match(run('list').stdout,/ORI-001/);assert.match(run('issue','ORI-001').stdout,/Prerequisites: None/);assert.equal(run('start','REACT-001','alice').status,1);});
