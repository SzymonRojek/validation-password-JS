const lengthError = { message: "The length should have minimum 5 characters!" };

export default function hasProperLength(password) {
  if (password.length < 5 || password.length > 10) {
    return lengthError;
  }

  return true;
}
