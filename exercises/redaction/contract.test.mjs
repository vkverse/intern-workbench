import test from 'node:test';
import assert from 'node:assert/strict';
import {solution} from '../test-utils.mjs';
const {redact}=await solution();
test('recursive case-insensitive redaction',()=>assert.deepEqual(redact({name:'Demo',Password:'fake',nested:[{TOKEN:'synthetic',value:5},null],authorization:'example'}),{name:'Demo',Password:'[REDACTED]',nested:[{TOKEN:'[REDACTED]',value:5},null],authorization:'[REDACTED]'}));
test('does not mutate input',()=>{const original=Object.freeze({password:'fake',safe:Object.freeze({value:1})});assert.deepEqual(redact(original),{password:'[REDACTED]',safe:{value:1}});assert.equal(original.password,'fake');});
test('preserves primitives and arrays',()=>{for(const value of [null,2,'hello',false])assert.deepEqual(redact(value),value);assert.deepEqual(redact([1,{token:'fake'}]),[1,{token:'[REDACTED]'}]);});
