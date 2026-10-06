import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

// Edge cases ----------------------------------------------------------------------------------------------------------------------------
test("can correctly convert midnight", function () {
  assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("can correctly convert noon", function () {
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});

// Zero-padding tests ----------------------------------------------------------------------------------------------------------------------------
test("pads single digit hours with a leading zero", function () {
  assert.equal(formatAs12HourClock("01:00"), "01:00 am");
  assert.equal(formatAs12HourClock("09:30"), "09:30 am");
});

test("pads single digit minutes with a leading zero", function () {
  assert.equal(formatAs12HourClock("08:05"), "08:05 am");
  assert.equal(formatAs12HourClock("00:05"), "12:05 am");
});

// Noon boundary tests ----------------------------------------------------------------------------------------------------------------------------
test("handles the minute just before noon", function () {
  assert.equal(formatAs12HourClock("11:59"), "11:59 am");
});

test("handles the minute just after noon", function () {
  assert.equal(formatAs12HourClock("12:01"), "12:01 pm");
});

// Midnight boundary tests ----------------------------------------------------------------------------------------------------------------------------
test("handles the minute just before midnight", function () {
  assert.equal(formatAs12HourClock("23:59"), "11:59 pm");
});

test("handles the minute just after midnight", function () {
  assert.equal(formatAs12HourClock("00:01"), "12:01 am");
});

// First pm hour after noon ----------------------------------------------------------------------------------------------------------------------------
test("converts 13:00 to 01:00 pm", function () {
  assert.equal(formatAs12HourClock("13:00"), "01:00 pm");
});

// 24 hour sweep tests ----------------------------------------------------------------------------------------------------------------------------------
test("correctly converts every hour of the day", function () {
  const expected = [
    "12:00 am",
    "01:00 am",
    "02:00 am",
    "03:00 am",
    "04:00 am",
    "05:00 am",
    "06:00 am",
    "07:00 am",
    "08:00 am",
    "09:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "01:00 pm",
    "02:00 pm",
    "03:00 pm",
    "04:00 pm",
    "05:00 pm",
    "06:00 pm",
    "07:00 pm",
    "08:00 pm",
    "09:00 pm",
    "10:00 pm",
    "11:00 pm",
  ];

  for (let hour = 0; hour < 24; hour++) {
    const input = String(hour).padStart(2, "0") + ":00";
    assert.equal(
      formatAs12HourClock(input),
      expected[hour],
      `failed for input ${input}`
    );
  }
});

// Reason behind my test cases
// - Covers midnight and noon edge cases
// - Converts am time correctly
// - Converts pm time correctly
// - Converts time with minutes correctly
// - Verifies zero-padding on both hours and minutes
// - Verifies the exact am/pm boundary (11:59 -> 12:00 -> 12:01)
// - Verifies the exact midnight boundary (23:59 -> 00:00 -> 00:01)
// - Full 24-hour sweep to guard against future regressions