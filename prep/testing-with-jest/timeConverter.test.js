import {formatAs12HourClock} from "./timeConverter.js";

test("correctly convert time after 12:00", () => {
  expect(formatAs12HourClock("23:00")).toEqual("11:00 pm");
});