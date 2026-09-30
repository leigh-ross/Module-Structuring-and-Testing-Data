// function receives a string representing time in 24-hour format as an argument
function formatAs12HourClock(time) {

    // extract digits representing hours
    const hours = Number(time.slice(0, 2));

    // if hour value over 12, subtract 12
    // if hour value under 12, continue
    if (hours > 12) {
        // add pm & return value
        return `${String(hours - 12)}:00 pm`
    }
    // add am and return value
    return `${String(hours)}:00 am`
}

console.log(formatAs12HourClock("23:00"));
console.log(formatAs12HourClock("14:00"));
export {formatAs12HourClock};