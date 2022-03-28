const lengthError = {
  message: "The length should have min 5 & max 12 characters!",
};

export default function hasProperLength(password) {
  if (password.length < 5 || password.length > 12) {
    return lengthError;
  }

  return true;
}
