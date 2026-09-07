import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {root} from '../scripts/workbench.mjs';
for(const exercise of ['transform','fetch','api','unit-tests','cart','redaction']) {
  for(const [label,dir,passes] of [['reference',path.join(root,'tests/fixtures',exercise),true],['unfinished starter',path.join(root,'exercises',exercise,'starter'),false]]) {
    test(exercise+': '+label+(passes?' passes':' fails'),{timeout:20000},()=>{
      // A nested runner must not inherit Node's private test-worker protocol.
      const env={...process.env,WORKBENCH_SUBMISSION:dir};
      delete env.NODE_TEST_CONTEXT;
      const result=spawnSync(process.execPath,['--test','--test-reporter=tap',path.join(root,'exercises',exercise,'contract.test.mjs')],{encoding:'utf8',timeout:15000,env});
      assert.ifError(result.error);
      assert.match(result.stdout,/# tests [1-9]/,'Child runner did not report executed tests');
      if(passes)assert.equal(result.status,0,result.stdout+result.stderr);
      else assert.notEqual(result.status,0,'Unfinished starter unexpectedly passed');
    });
  }
}
