import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import {solution} from '../test-utils.mjs';
const {handler}=await solution();
test('HTTP endpoint contract',{timeout:8000},async()=>{
  const server=http.createServer(handler);
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  try {
    const base='http://127.0.0.1:'+server.address().port;
    for(const [route,method,status,body] of [['/health','GET',200,{status:'ok'}],['/api/items','GET',200,{items:[]}],['/missing','GET',404,{error:'Not found'}],['/health','POST',405,{error:'Method not allowed'}]]) {
      const response=await fetch(base+route,{method,signal:AbortSignal.timeout(2000)});
      assert.equal(response.status,status);
      assert.match(response.headers.get('content-type'),/application\/json/);
      assert.deepEqual(await response.json(),body);
    }
  } finally {server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
});
