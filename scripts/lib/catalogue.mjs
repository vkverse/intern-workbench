import fs from 'node:fs';
import path from 'node:path';
export const phases = 'ORI GIT HTML CSS JS TS WEB REACT NEXT NODE API DB AUTH SEC TEST DEBUG QUALITY DOCKER CICD REVIEW DOCS PERF SYSTEM REAL FINAL'.split(' ');
export const sections = ['Objective','Context','What You Need to Learn','Requirements','Files / Folders','Implementation Guidance','Restrictions','Acceptance Criteria','How to Run','How to Test','Expected Evidence','Documentation Requirements','AI Usage Requirements','Submission Instructions','Branch Name','Commit Message','Pull Request Requirements','Mentor Review Checklist','Common Mistakes','Definition of Done','Optional Extension'];
export function walk(root) {
  if (!fs.existsSync(root)) return [];
  return fs.readdirSync(root, {withFileTypes:true}).flatMap(entry => {
    if (entry.isSymbolicLink() || ['.git','node_modules','coverage','.next','dist','scratch'].includes(entry.name)) return [];
    const file = path.join(root, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}
export function parseTask(text) {
  text = text.replaceAll('\r\n','\n');
  const block = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!block) throw new Error('Missing front matter');
  const meta = {}; let list;
  for (const line of block[1].split('\n')) {
    if (line.startsWith('  - ') && list) { meta[list].push(line.slice(4)); continue; }
    const match = line.match(/^([a-z_]+):(?: (.*))?$/);
    if (!match) throw new Error('Unsupported metadata: '+line);
    const [,key,value] = match;
    if (Object.hasOwn(meta,key)) throw new Error('Duplicate metadata key: '+key);
    list = undefined;
    if (value === undefined || value === '[]') { meta[key]=[]; if (value === undefined) list=key; }
    else meta[key]=value;
  }
  return {meta, text};
}
export function catalogue(root) {
  return walk(path.join(root,'curriculum')).filter(f=>/[/\\][A-Z]+-\d{3}\.md$/.test(f)).map(file=>({file,...parseTask(fs.readFileSync(file,'utf8'))}));
}
export function indexMarkdown(tasks,root) {
  const order = [...tasks].sort((a,b)=>phases.indexOf(a.meta.phase)-phases.indexOf(b.meta.phase)||a.meta.id.localeCompare(b.meta.id));
  return '# Curriculum\n\nStart with [START-HERE](START-HERE.md). **Active** tasks have v0.5 exercise contracts; **draft** entries are retained outlines, not assignable lessons. IDs remain reserved. Estimates are planning aids. Active does not mean independently validated by a real cohort.\n\n| ID | Title | Status | Type | Difficulty | Guidance | Estimate | Prerequisites | Skills |\n|---|---|---|---|---|---|---|---|---|\n'+order.map(({meta:m,file})=>'| ['+m.id+']('+path.relative(root,file).replaceAll('\\','/')+') | '+[m.title,m.status,m.type,m.difficulty,m.guidance,m.estimated_time,m.prerequisites.join(', ')||'None',m.skills.join(', ')].join(' | ')+' |').join('\n')+'\n';
}
