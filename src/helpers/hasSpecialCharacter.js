const specialCharacterError = {
  message: "Password has to contain minimum one of '# @ !' special characters!",
};

export default function hasSpecialCharacter(password) {
  const specialCharacters = ["@", "!", "#"];

  let isChar = false;

  for (const char of specialCharacters) {
    if (password.includes(char)) {
      isChar = true;
      break;
    }
  }

  if (!isChar) {
    return specialCharacterError;
  }

  return isChar;
}
