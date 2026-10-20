export function isValidPassword(password) {
  let result = true;
  result &&= password.length >= 5;
  result &&= /[A-Z]/.test(password);
  result &&= /[a-z]/.test(password);
  result &&= /[0-9]/.test(password);
  result &&= /[!#$%.*&]/.test(password);
  if (result === true){
    if (!validPasswords.includes(password)) {
      validPasswords.push(password);
    }
    else {
      result &&= false;
    }
  }
  return result
};
const validPasswords = [];