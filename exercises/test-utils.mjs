import path from 'node:path';
import {pathToFileURL} from 'node:url';
export async function solution() {
  if(!process.env.WORKBENCH_SUBMISSION)throw new Error('Use npm run workbench -- check ID username');
  return import(pathToFileURL(path.join(process.env.WORKBENCH_SUBMISSION,'solution.mjs')));
}
