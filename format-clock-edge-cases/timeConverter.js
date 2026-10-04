function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(-2);
  let hours12;
  let timePeriod;

  if (hours === 0) {
    hours12 = "12";
    timePeriod = "am";
  }
  else if (hours === 12) {
    hours12 = "12";
    timePeriod = "pm";
  }
  else if (hours < 12) {
    hours12 = String(hours12).padStart(2, "0");
    timePeriod = "am";
  }
  else if (hours > 12) {
    hours12 = String(hours12 - 12).padStart(2, "0");
    timePeriod = "pm"
  }
  return `${hours12}:${minutes} ${timePeriod}`
}
export {formatAs12HourClock};