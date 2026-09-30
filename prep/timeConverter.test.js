import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function() {
    assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});