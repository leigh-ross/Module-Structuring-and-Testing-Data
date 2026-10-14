import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

describe("Valid Face cards", () => {
  test("Check Ace", () => {
    expect(getCardValue("A♠")).toBe(11);
  });
  test("Check King", () => {
    expect(getCardValue("K♠")).toBe(10);
  });
  test("Check Queen", () => {
    expect(getCardValue("Q♠")).toBe(10);
  });
  test("Check Jack", () => {
    expect(getCardValue("J♠")).toBe(10);
  });
});

describe("Valid number cards", () => {
  test("Check 2", () => {
    expect(getCardValue("2♠")).toBe(2);
  });
  test("Check 5", () => {
    expect(getCardValue("5♠")).toBe(5);
  });
  test("Check 7", () => {
    expect(getCardValue("7♠")).toBe(7);
  });
  test("Check 10", () => {
    expect(getCardValue("10♠")).toBe(10);
  });
});

describe("Invalid cards", () => {
  test("Arbitrary non-card string", () => {
    expect(() => getCardValue("invalid")).toThrow(
      'Expected a number followed by a suit, but got "invalid"'
    );
  });
  test("Out of bounds: 1♥", () => {
    expect(() => getCardValue("1♥")).toThrow(
      'Expected a number followed by a suit, but got "1♥"'
    );
  });
  test("Out of bounds: 11♥", () => {
    expect(() => getCardValue("11♥")).toThrow(
      'Expected a number followed by a suit, but got "11♥"'
    );
  });
});

describe("Invalid card suits", () => {
  test("Invalid suit: 2O", () => {
    expect(() => getCardValue("2O")).toThrow(
      'Expected card suit to be: "♠", "♥", "♦", "♣" but got "2O"'
    );
  });
  test("Invalid suit: 8d", () => {
    expect(() => getCardValue("8d")).toThrow(
      'Expected card suit to be: "♠", "♥", "♦", "♣" but got "8d"'
    );
  });
  test("Invalid suit: 9X", () => {
    expect(() => getCardValue("9★")).toThrow(
      'Expected card suit to be: "♠", "♥", "♦", "♣" but got "9★"'
    );
  });
});