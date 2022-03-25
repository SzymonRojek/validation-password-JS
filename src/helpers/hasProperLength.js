const lengthError = { message: "The length should be >=5 && <=10!" };

export default function hasProperLength(password) {
  if (password.length < 3 || password.length > 10) {
    return lengthError;
  }

  return true;
}
