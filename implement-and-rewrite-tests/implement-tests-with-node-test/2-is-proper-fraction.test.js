import assert from "node:assert";
import test, {describe} from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

describe ("Proper fractions", () => {
  test("Basic proper fraction", () => {
  assert.equal(isProperFraction(1, 2), true);
  });

  test("3/4 is proper", () => {
  assert.equal(isProperFraction(3, 4), true);
  });

  test("2345678/98765234567 is proper", () => {
  assert.equal(isProperFraction(2345678, 98765234567), true);
  });

  test("0/5 is proper", () => {
  assert.equal(isProperFraction(0, 5), true);
  });

  test("99/100 is proper", () => {
  assert.equal(isProperFraction(99, 100), true);
  });

  test("1/900 is proper", () => {
  assert.equal(isProperFraction(1, 900), true);
  });
});

describe ("Division by 0", () => {
  test("1/0 is invalid", () => {
    assert.equal(isProperFraction(1, 0), false);
  });

  test("19768/0 is invalid", () => {
    assert.equal(isProperFraction(19768, 0), false);
  });

  test("0/0 is invalid", () => {
    assert.equal(isProperFraction(0, 0), false);
  });
});

describe ("Improper fractions", () => {
  test("1/1 is improper", () => {
    assert.equal(isProperFraction(1, 1), false);
  });

  test("19768/9 is improper", () => {
    assert.equal(isProperFraction(19768, 9), false);
  });

  test("8/5 is improper", () => {
    assert.equal(isProperFraction(8, 5), false);
  });
});

describe ("Negative numerator", () => {
  test("-98/100", () => {
    assert.equal(isProperFraction(-98, 100), false);
  });

  test("-19768/9 is improper", () => {
    assert.equal(isProperFraction(-19768, 9), false);
  });

  test("-8/5 is improper", () => {
    assert.equal(isProperFraction(-8, 5), false);
  });
});