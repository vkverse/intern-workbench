import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {root} from '../scripts/workbench.mjs';
import {catalogue} from '../scripts/lib/catalogue.mjs';

function sandbox(t) {
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'workbench-cli-'));
  t.after(()=>fs.rmSync(dir,{recursive:true,force:true}));
  for(const folder of ['scripts','curriculum','exercises'])fs.cpSync(path.join(root,folder),path.join(dir,folder),{recursive:true});
  return dir;
}
function run(dir,script,...args) {
  const env={...process.env};delete env.NODE_TEST_CONTEXT;
  return spawnSync(process.execPath,[path.join(dir,'scripts',script),...args],{encoding:'utf8',timeout:20000,env,cwd:dir});
}
function evidence(dir,id) {
  fs.writeFileSync(path.join(dir,'submissions/alice',id,'README.md'),['Outcome','Approach','Evidence','Reflection','AI Usage'].map(h=>'## '+h+'\n\nSynthetic test fixture, not a learner claim.\n').join('\n'));
}
test('all active tasks prepare; every empty submission fails; repeats preserve files',t=>{
  const dir=sandbox(t);
  for(const {meta:m} of catalogue(root).filter(task=>task.meta.status==='active')) {
    const start=run(dir,'workbench.mjs','start',m.id,'alice');
    assert.equal(start.status,0,start.stderr);
    assert.equal(run(dir,'workbench.mjs','check',m.id,'alice').status,1,m.id+' empty evidence must fail');
    const file=path.join(dir,'submissions/alice',m.id,'README.md'),before=fs.readFileSync(file,'utf8');
    assert.equal(run(dir,'workbench.mjs','start',m.id,'alice').status,1);
    assert.equal(fs.readFileSync(file,'utf8'),before);
  }
});
test('completed function submission passes CLI and aggregate; broken code fails both',t=>{
  const dir=sandbox(t),id='JS-004';
  assert.equal(run(dir,'workbench.mjs','start',id,'alice').status,0);
  evidence(dir,id);
  const solution=path.join(dir,'submissions/alice',id,'solution.mjs');
  fs.copyFileSync(path.join(root,'tests/fixtures/transform/solution.mjs'),solution);
  assert.equal(run(dir,'workbench.mjs','check',id,'alice').status,0);
  assert.equal(run(dir,'check-submissions.mjs').status,0);
  fs.writeFileSync(solution,'export function summarizeOrders(){return {count:0,totalCents:0};}');
  assert.equal(run(dir,'workbench.mjs','check',id,'alice').status,1);
  assert.equal(run(dir,'check-submissions.mjs').status,1);
});
test('HTML task requires document structure, CSS task requires stylesheet',t=>{
  const dir=sandbox(t),id='CSS-007';
  run(dir,'workbench.mjs','start',id,'alice');evidence(dir,id);
  const dest=path.join(dir,'submissions/alice',id);
  assert.equal(run(dir,'workbench.mjs','check',id,'alice').status,1);
  fs.writeFileSync(path.join(dest,'index.html'),'<!doctype html><html lang="en"><title>Fixture</title><main>Demo</main></html>');
  assert.equal(run(dir,'workbench.mjs','check',id,'alice').status,1);
  fs.writeFileSync(path.join(dest,'styles.css'),'main { max-width: 60rem; }');
  assert.equal(run(dir,'workbench.mjs','check',id,'alice').status,0);
});
test('TEST-002 requires and executes intern tests',t=>{
  const dir=sandbox(t),id='TEST-002';
  run(dir,'workbench.mjs','start',id,'alice');evidence(dir,id);
  const dest=path.join(dir,'submissions/alice',id);
  fs.copyFileSync(path.join(root,'tests/fixtures/unit-tests/solution.mjs'),path.join(dest,'solution.mjs'));
  assert.equal(run(dir,'workbench.mjs','check',id,'alice').status,1);
  const own=path.join(dest,'solution.test.mjs');
  fs.writeFileSync(own,"import test from 'node:test';import assert from 'node:assert/strict';import {clamp} from './solution.mjs';test('bound',()=>assert.equal(clamp(-1,0,2),0));");
  assert.equal(run(dir,'workbench.mjs','check',id,'alice').status,0);
  fs.appendFileSync(own,"test('deliberate failure',()=>assert.fail('regression'));");
  assert.equal(run(dir,'workbench.mjs','check',id,'alice').status,1);
});
