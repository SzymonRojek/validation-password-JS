export default function countSpecialCharacters(password) {
  const specialCharacters = ["@", "!", "#"];
  let counterSpecialCharacters = 0;

  for (const char of specialCharacters) {
    if (password.includes(char)) {
      counterSpecialCharacters++;
    }
  }

  return counterSpecialCharacters;
}
