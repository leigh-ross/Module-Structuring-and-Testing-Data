import assert from "node:assert";
import test, { describe } from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies right angles", () => {
  const angleValue = getAngleType(90);
  assert.equal(angleValue, "Right angle");
});

test("Classifies straight angles", () => {
  const angleValue = getAngleType(180);
  assert.equal(angleValue, "Straight angle");
});

describe ("Acute angles and boundaries", () => {
  test("1 is acute", () => {
    const angleValue = getAngleType(1);
    assert.equal(angleValue, "Acute angle");
  });

  test("45 is acute", () => {
    const angleValue = getAngleType(45);
    assert.equal(angleValue, "Acute angle");
  });

  test("89 is acute", () => {
    const angleValue = getAngleType(89);
    assert.equal(angleValue, "Acute angle");
  });
});

describe ("Obtuse angles and boundaries", () => {
  test("91 is obtuse", () => {
    const angleValue = getAngleType(91);
    assert.equal(angleValue, "Obtuse angle");
  });

  test("135 is obtuse", () => {
    const angleValue = getAngleType(135);
    assert.equal(angleValue, "Obtuse angle");
  });

  test("179 is obtuse", () => {
    const angleValue = getAngleType(179);
    assert.equal(angleValue, "Obtuse angle");
  });
});

describe ("Reflex angles and boundaries", () => {
  test("181 is reflex", () => {
    const angleValue = getAngleType(181);
    assert.equal(angleValue, "Reflex angle");
  });

  test("270 is reflex", () => {
    const angleValue = getAngleType(270);
    assert.equal(angleValue, "Reflex angle");
  });

  test("359 is reflex", () => {
    const angleValue = getAngleType(359);
    assert.equal(angleValue, "Reflex angle");
  });
});

describe ("Invalid angles and boundaries", () => {
  test("0 is invalid", () => {
    const angleValue = getAngleType(0);
    assert.equal(angleValue, "Invalid angle");
  });

  test("5879 is invalid", () => {
    const angleValue = getAngleType(5879);
    assert.equal(angleValue, "Invalid angle");
  });

  test("-1 is invalid", () => {
    const angleValue = getAngleType(-1);
    assert.equal(angleValue, "Invalid angle");
  });

  test("360 is invalid", () => {
    const angleValue = getAngleType(360);
    assert.equal(angleValue, "Invalid angle");
  });
});