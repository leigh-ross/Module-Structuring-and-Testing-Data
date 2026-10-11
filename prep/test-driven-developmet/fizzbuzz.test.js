import {fizzbuzz} from "./fizzbuzz.js";
import assert from 'node:assert';
import {test, describe} from 'node:test';

describe('division by 3', () => { 

    test('3 returns fizz', () => {
        assert.equal(fizzbuzz(3), "fizz");
    });

});

describe('division by 3 and 5', () => {

    test('15 returns fizzbuzz', () => {
        assert.equal(fizzbuzz(15), "fizzbuzz");
    });

    test('30 returns fizzbuzz', () => {
        assert.equal(fizzbuzz(30), "fizzbuzz");
    });

    test('90 returns fizzbuzz', () => {
        assert.equal(fizzbuzz(90), "fizzbuzz");
    });
})

describe('division by 5', () => {

    test('5 returns buzz', () => {
        assert.equal(fizzbuzz(5), "buzz");
    });

    test('10 returns buzz', () => {
        assert.equal(fizzbuzz(10), "buzz");
    });

    test('95 returns buzz', () => {
        assert.equal(fizzbuzz(95), "buzz");
    });
})

describe('returning the number as a string', () => { 

    test('1 returns "1"', () => {
        assert.equal(fizzbuzz(1), "1");
    });

    test('4 returns "4"', () => {
        assert.equal(fizzbuzz(4), "4");
    });

    test('91 returns "91"', () => {
        assert.equal(fizzbuzz(91), "91");
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