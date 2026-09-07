import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {catalogue,walk,phases,sections,indexMarkdown} from '../lib/catalogue.mjs';
export function validate(root) {
  const errors=[]; let tasks;
  try { tasks=catalogue(root); } catch(error) { return [error.message]; }
  if(tasks.length===0)errors.push('No curriculum tasks found.');
  const byId=new Map();
  for(const task of tasks) {
    const {meta:m,text,file}=task;
    const report=message=>errors.push(path.relative(root,file)+': '+message);
    if(typeof m.id!=='string'||!/^[A-Z]+-\d{3}$/.test(m.id)||path.basename(file)!==m.id+'.md'||m.id.split('-')[0]!==m.phase) report('Invalid ID/phase/filename');
    if(byId.has(m.id)) report('Duplicate ID');
    byId.set(m.id,task);
    for(const field of ['title','estimated_time']) if(typeof m[field]!=='string'||!m[field].trim())report('Missing '+field);
    for(const [key,values] of Object.entries({phase:phases,status:['active','draft','deprecated'],type:['LEARN','BUILD','DEBUG','REFACTOR','REVIEW','INVESTIGATE','DOCUMENT','DESIGN','PROJECT'],guidance:['GUIDED','PARTIALLY-GUIDED','INDEPENDENT','AMBIGUOUS'],difficulty:['beginner','intermediate','advanced']})) if(!values.includes(m[key]))report('Invalid '+key);
    for(const key of ['skills','prerequisites']) if(!Array.isArray(m[key])||m[key].some(v=>typeof v!=='string'))report('Invalid '+key+' list');
    for(const section of sections) {
      const part=text.split('## '+section+'\n')[1]?.split('\n## ')[0]?.trim();
      if(!part)report('Empty or missing section: '+section);
    }
    if(!text.includes('task/<github-username>/'))report('Branch requires username');
    if(m.status==='active') {
      if(typeof m.exercise!=='string'||!/^[a-z][a-z0-9-]*$/.test(m.exercise)||!fs.existsSync(path.join(root,'exercises',m.exercise,'README.md'))) report('Active task missing exercise contract');
      if(text.includes('Produce the smallest working example or analysis'))report('Active task still uses generic requirements');
    }
  }
  const visiting=new Set(),done=new Set();
  function visit(id) {
    if(visiting.has(id)){errors.push('Prerequisite cycle: '+id);return;}
    if(done.has(id))return;
    visiting.add(id);
    const task=byId.get(id);
    for(const p of Array.isArray(task.meta.prerequisites)?task.meta.prerequisites:[]) {
      if(!byId.has(p))errors.push(id+': missing prerequisite '+p);
      else {if(task.meta.status==='active'&&byId.get(p).meta.status!=='active')errors.push(id+': inactive prerequisite '+p); visit(p);}
    }
    visiting.delete(id);done.add(id);
  }
  for(const id of byId.keys())visit(id);
  for(const file of walk(root).filter(f=>f.endsWith('.md'))) {
    const text=fs.readFileSync(file,'utf8').replace(/\x60{3}[\s\S]*?\x60{3}/g,'');
    for(const [,href] of text.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
      if(/^(https?:|mailto:|#)/.test(href)||href.includes('<'))continue;
      let target;try {target=decodeURIComponent(href.split('#')[0]);}catch{errors.push('Malformed link: '+href);continue;}
      if(!fs.existsSync(path.resolve(path.dirname(file),target)))errors.push(path.relative(root,file)+': broken link '+href);
    }
  }
  for(const file of ['START-HERE.md','ONBOARDING.md','MENTOR-GUIDE.md','company/PROFILE.yml','.github/PULL_REQUEST_TEMPLATE.md'])if(!fs.existsSync(path.join(root,file)))errors.push('Missing '+file);
  const index=path.join(root,'CURRICULUM.md');
  if(!errors.length&&(!fs.existsSync(index)||fs.readFileSync(index,'utf8').replaceAll('\r\n','\n')!==indexMarkdown(tasks,root)))errors.push('Catalogue stale: run npm run catalogue:write');
  return errors;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  const errors=validate(process.cwd());
  if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}
  else {const tasks=catalogue(process.cwd());console.log('Validated '+tasks.length+' IDs; '+tasks.filter(t=>t.meta.status==='active').length+' active tasks. Draft outlines are not release-ready exercises. Human review remains required.');}
}
