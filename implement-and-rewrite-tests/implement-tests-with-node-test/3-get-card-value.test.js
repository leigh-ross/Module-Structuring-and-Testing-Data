import assert from "node:assert";
import test, {describe} from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

describe ("Valid Face cards", () => {
  test("Check Ace", () => {
    assert.equal(getCardValue("A♠"), 11);
  });
  test("Check King", () => {
    assert.equal(getCardValue("K♠"), 10);
  })
  test("Check Queen", () => {
    assert.equal(getCardValue("Q♠"), 10);
  })
  test("Check Jack", () => {
    assert.equal(getCardValue("J♠"), 10);
  })
});

describe ("Valid number cards", () => {
  test("Check 2", () => {
    assert.equal(getCardValue("2♠"), 2);
  });
  test("Check 5", () => {
    assert.equal(getCardValue("5♠"), 5);
  })
  test("Check 7", () => {
    assert.equal(getCardValue("7♠"), 7);
  })
  test("Check 10", () => {
    assert.equal(getCardValue("10♠"), 10);
  });
});

describe ("Invalid cards", () => {
  test("Arbitrary non-card string", () => {
  assert.throws(() => getCardValue("invalid"), /Expected a number followed by a suit, but got "invalid"/, "Expected clear error");
  });
  test("Out of bounds: 1♥", () => {
  assert.throws(() => getCardValue("1♥"), /Expected a number followed by a suit, but got "1♥"/);
    });
  test("Out of bound: 11♥", () => {
  assert.throws(() => getCardValue("11♥"), /Expected a number followed by a suit, but got "11♥"/);
    });
});