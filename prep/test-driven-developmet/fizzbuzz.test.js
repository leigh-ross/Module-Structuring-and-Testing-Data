import {fizzbuzz} from "./fizzbuzz.js";
import assert from 'node:assert';
import {test, describe} from 'node:test';

describe('division by 3', () => { 

    test('3 returns fizz', () => {
        assert.equal(fizzbuzz(3), "fizz");
    });

});

/*
Tests to run:
- Division by 3 = fizz
- Division by 5 = buzz
- Division by both = fizzbuzz
- Division by neither = return number
- Assume all inputs are numbers greater than 0
*/