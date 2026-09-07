import test from 'node:test';
import assert from 'node:assert/strict';
import {solution} from '../test-utils.mjs';
const {cartTotal}=await solution();
test('regression: quantity is included',()=>assert.equal(cartTotal([{priceCents:1250,quantity:3}]),3750));
test('multiple items, zero quantity and empty cart',()=>{assert.equal(cartTotal([{priceCents:100,quantity:2},{priceCents:35,quantity:3},{priceCents:40,quantity:0}]),305);assert.equal(cartTotal([]),0);});
test('invalid price or quantity throws',()=>{for(const value of [-1,1.5,NaN,Infinity,'2']){assert.throws(()=>cartTotal([{priceCents:value,quantity:1}]),TypeError);assert.throws(()=>cartTotal([{priceCents:10,quantity:value}]),TypeError);}});
test('frozen records stay unchanged',()=>assert.equal(cartTotal(Object.freeze([Object.freeze({priceCents:20,quantity:2})])),40));
