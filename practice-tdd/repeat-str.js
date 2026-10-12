export function repeatStr(str, count) {
  let repeatedString = "";
  if (count < 0) {
    throw new Error("Please enter a non-negative number");
  }
  else if (count === 0){
    return ""
  }
  else if (count === 1) {
    return str
  }
  for (i = 0; i < count; i++) {
    repeatedString += str
    
  }
  return repeatedString
}
