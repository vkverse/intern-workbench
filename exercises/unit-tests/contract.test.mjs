import test from 'node:test';
import assert from 'node:assert/strict';
import {solution} from '../test-utils.mjs';
const {clamp}=await solution();
test('bounds and middle',()=>{assert.equal(clamp(-1,0,10),0);assert.equal(clamp(11,0,10),10);assert.equal(clamp(5,0,10),5);assert.equal(clamp(0,0,10),0);assert.equal(clamp(10,0,10),10);assert.equal(clamp(4,3,3),3);});
test('reject invalid numbers and reversed bounds',()=>{for(const args of [[NaN,0,2],[1,Infinity,2],[1,0,Infinity],[1,3,2],['1',0,2]])assert.throws(()=>clamp(...args),TypeError);});
