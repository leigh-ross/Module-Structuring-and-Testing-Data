import { isProperFraction } from "../implement/2-is-proper-fraction.js"; fix

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

describe("Proper fractions", () => {
  test("Basic proper fraction", () => {
    expect(isProperFraction(1, 2)).toBe(true);
  });
  test("3/4 is proper", () => {
    expect(isProperFraction(3, 4)).toBe(true);
  });
  test("2345678/98765234567 is proper", () => {
    expect(isProperFraction(2345678, 98765234567)).toBe(true);
  });
  test("0/5 is proper", () => {
    expect(isProperFraction(0, 5)).toBe(true);
  });
  test("99/100 is proper", () => {
    expect(isProperFraction(99, 100)).toBe(true);
  });
  test("1/900 is proper", () => {
    expect(isProperFraction(1, 900)).toBe(true);
  });
});

describe("Division by 0", () => {
  test("1/0 is invalid", () => {
    expect(isProperFraction(1, 0)).toBe(false);
  });
  test("19768/0 is invalid", () => {
    expect(isProperFraction(19768, 0)).toBe(false);
  });
  test("0/0 is invalid", () => {
    expect(isProperFraction(0, 0)).toBe(false);
  });
});

describe("Improper fractions", () => {
  test("1/1 is improper", () => {
    expect(isProperFraction(1, 1)).toBe(false);
  });
  test("19768/9 is improper", () => {
    expect(isProperFraction(19768, 9)).toBe(false);
  });
  test("8/5 is improper", () => {
    expect(isProperFraction(8, 5)).toBe(false);
  });
});

describe("Negative improper fractions", () => {
  test("-980/100 is not a proper fraction", () => {
    expect(isProperFraction(-98, 100)).toBe(false);
  });
  test("-19768/9 is not a proper fraction", () => {
    expect(isProperFraction(-19768, 9)).toBe(false);
  });
  test("-8/5 is not a proper fraction", () => {
    expect(isProperFraction(-8, 5)).toBe(false);
  });
});

describe("Negative proper fractions", () => {
  test("-98/100 is a proper fraction", () => {
    expect(isProperFraction(-98, 100)).toBe(true);
  });
  test("-19768/9 is a proper fraction", () => {
    expect(isProperFraction(-1, 9)).toBe(true);
  });
  test("-8/5 is a proper fraction", () => {
    expect(isProperFraction(-8, 15)).toBe(true);
  });
});