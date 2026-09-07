import test from 'node:test';
import assert from 'node:assert/strict';
import {solution} from '../test-utils.mjs';
const {summarizeOrders}=await solution();
test('paid orders only; integer cents',()=>assert.deepEqual(summarizeOrders([{id:1,status:'paid',amount:1200},{id:2,status:'pending',amount:700},{id:3,status:'paid',amount:50}]),{count:2,totalCents:1250}));
test('empty input',()=>assert.deepEqual(summarizeOrders([]),{count:0,totalCents:0}));
test('input not mutated',()=>assert.deepEqual(summarizeOrders(Object.freeze([Object.freeze({id:1,status:'paid',amount:5})])),{count:1,totalCents:5}));
test('reject invalid amounts on any record',()=>{for(const amount of [-1,1.5,NaN,Infinity,'5'])assert.throws(()=>summarizeOrders([{id:1,status:'pending',amount}]),TypeError);});
