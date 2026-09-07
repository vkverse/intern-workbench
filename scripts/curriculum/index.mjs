import fs from 'node:fs';
import {catalogue,indexMarkdown} from '../lib/catalogue.mjs';
const root=process.cwd(), tasks=catalogue(root);
if(process.argv.includes('--write'))fs.writeFileSync('CURRICULUM.md',indexMarkdown(tasks,root));
else console.log(JSON.stringify(tasks.map(({meta})=>meta),null,2));
