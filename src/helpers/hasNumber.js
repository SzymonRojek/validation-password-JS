const numberError = { message: "Password has to contain minimum one number!" };

export default function hasNumber(password) {
  let isNumber = false;

  for (const char of password) {
    if (!isNaN(parseFloat(char))) {
      isNumber = true;
      break;
    }
  }

  if (!isNumber) {
    return numberError;
  }

  return isNumber;
}
