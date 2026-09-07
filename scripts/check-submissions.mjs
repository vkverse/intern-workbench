import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {root,submissionPath} from './workbench.mjs';
const dir=path.join(root,'submissions');
let count=0;
if(fs.existsSync(dir)) {
  if(fs.lstatSync(dir).isSymbolicLink())throw new Error('Submissions cannot be a symlink.');
  for(const user of fs.readdirSync(dir,{withFileTypes:true})) {
    if(user.name==='README.md'&&user.isFile())continue;
    if(!user.isDirectory()||user.isSymbolicLink())throw new Error('Unexpected submission entry: '+user.name);
    submissionPath(root,user.name,'ORI-001');
    for(const task of fs.readdirSync(path.join(dir,user.name),{withFileTypes:true})) {
      if(!task.isDirectory()||task.isSymbolicLink())throw new Error('Unexpected task entry: '+task.name);
      submissionPath(root,user.name,task.name);
      const result=spawnSync(process.execPath,[path.join(root,'scripts/workbench.mjs'),'check',task.name,user.name],{stdio:'inherit',timeout:45000});
      if(result.status!==0)process.exitCode=1;
      count++;
    }
  }
}
console.log('Checked '+count+' submissions. Human mentor review is still required.');
