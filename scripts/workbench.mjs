import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {catalogue} from './lib/catalogue.mjs';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export function submissionPath(base,user,id) {
  if(!/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(user)||user.includes('--'))throw new Error('Use your GitHub username, not a display name or path.');
  if(!/^[A-Z]+-\d{3}$/.test(id))throw new Error('Use a stable task ID such as ORI-001.');
  const target=path.join(base,'submissions',user.toLowerCase(),id);
  let current=base;
  for(const part of ['submissions',user.toLowerCase(),id]) {
    current=path.join(current,part);
    if(fs.existsSync(current)&&fs.lstatSync(current).isSymbolicLink())throw new Error('Refusing a symlink submission path.');
  }
  return target;
}
export function startTask(base,task,user) {
  if(task.meta.status!=='active')throw new Error('Only active tasks can be started.');
  if(typeof task.meta.exercise!=='string'||!/^[a-z][a-z0-9-]*$/.test(task.meta.exercise))throw new Error('Invalid exercise directory.');
  const dest=submissionPath(base,user,task.meta.id);
  if(fs.existsSync(dest))throw new Error('Submission already exists; your work was not overwritten: '+dest);
  fs.mkdirSync(dest,{recursive:true});
  const starter=path.join(base,'exercises',task.meta.exercise,'starter');
  if(fs.existsSync(starter))fs.cpSync(starter,dest,{recursive:true,errorOnExist:true,force:false});
  fs.writeFileSync(path.join(dest,'README.md'),'# '+task.meta.id+'\n\n## Outcome\n\n## Approach\n\n## Evidence\n\n## Reflection\n\n## AI Usage\n\nState whether AI was used, what it generated, and what you personally verified. Do not claim understanding or tests you have not demonstrated.\n');
  return dest;
}
export function checkEvidence(dir) {
  const errors=[];
  const file=path.join(dir,'README.md');
  if(!fs.existsSync(file))return ['Missing README.md'];
  const text=fs.readFileSync(file,'utf8').replaceAll('\r\n','\n');
  for(const heading of ['Outcome','Approach','Evidence','Reflection','AI Usage']) {
    const value=text.split('## '+heading+'\n')[1]?.split('\n## ')[0]?.trim();
    if(!value||value.startsWith('State whether AI was used'))errors.push('Complete '+heading+' using actual evidence.');
  }
  return errors;
}
async function main() {
  const [command,id,user]=process.argv.slice(2);
  const tasks=catalogue(root);
  if(command==='list') {for(const {meta:m} of tasks.filter(t=>t.meta.status==='active'))console.log(m.id+' '+m.title);return;}
  const task=tasks.find(t=>t.meta.id===id);
  if(!task)throw new Error('Unknown task. Run npm run workbench -- list');
  if(task.meta.status!=='active')throw new Error(id+' is a draft/deprecated outline; select an active task.');
  if(typeof task.meta.exercise!=='string'||!/^[a-z][a-z0-9-]*$/.test(task.meta.exercise))throw new Error('Invalid exercise directory.');
  if(command==='issue') {
    console.log('# ['+id+'] '+task.meta.title+'\n\nTask: '+path.relative(root,task.file).replaceAll('\\','/')+'\n\nPrerequisites: '+(task.meta.prerequisites.join(', ')||'None')+'\n\nAssign an intern and agree the AI policy before work starts.\n\n'+task.text.split('## Requirements')[1].split('## How to Run')[0]);
    return;
  }
  const dest=submissionPath(root,user||'',id);
  if(command==='start'){console.log('Created '+startTask(root,task,user));console.log('Read '+path.relative(root,task.file));return;}
  if(command!=='check')throw new Error('Commands: list | start ID username | check ID username | issue ID');
  const errors=checkEvidence(dest);
  const contract=path.join(root,'exercises',task.meta.exercise,'contract.test.mjs');
  if(fs.existsSync(contract)) {
    const result=spawnSync(process.execPath,['--test',contract],{stdio:'inherit',timeout:15000,env:{...process.env,WORKBENCH_SUBMISSION:dest}});
    if(result.status!==0)errors.push('Exercise contract tests failed.');
  }
  const own=path.join(dest,'solution.test.mjs');
  if(task.meta.id==='TEST-002'&&!fs.existsSync(own))errors.push('TEST-002 requires solution.test.mjs');
  if(fs.existsSync(own)) {
    const result=spawnSync(process.execPath,['--test',own],{stdio:'inherit',timeout:15000});
    if(result.status!==0)errors.push('Submission tests failed.');
  }
  if(['HTML-001','HTML-004','HTML-008','CSS-007'].includes(id)) {
    const file=path.join(dest,'index.html');
    if(!fs.existsSync(file))errors.push('Missing index.html');
    else {
      const html=fs.readFileSync(file,'utf8');
      for(const pattern of [/<!doctype html>/i,/<html[^>]+lang=/i,/<title>[^<]+<\/title>/i,/<main[\s>]/i])if(!pattern.test(html))errors.push('HTML document needs doctype, lang, title and main.');
    }
    if(id==='CSS-007'&&!fs.existsSync(path.join(dest,'styles.css')))errors.push('Missing styles.css');
  }
  if(id==='GIT-003'&&!fs.existsSync(path.join(dest,'notes.txt')))errors.push('Missing notes.txt');
  if(errors.length)throw new Error(errors.join('\n'));
  console.log('Objective checks passed. Mentor must review accuracy, behavior, accessibility, and understanding.');
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))main().catch(e=>{console.error(e.message);process.exitCode=1;});
