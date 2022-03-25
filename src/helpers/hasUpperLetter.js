const upperLetterError = {
  message: "Password has to contain minimum one capital letter!",
};

export default function hasUpperLetter(password) {
  let hasUpperLetter = false;

  for (const letter of password) {
    if (letter === letter.toUpperCase()) {
      hasUpperLetter = true;
      break;
    }
  }

  if (!hasUpperLetter) {
    return upperLetterError;
  }

  return hasUpperLetter;
}
