export default function countUpperLetters(password) {
  let counterUpperLetter = 0;

  for (const letter of password) {
    if (
      letter.toLowerCase() !== letter.toUpperCase() &&
      letter === letter.toUpperCase()
    ) {
      counterUpperLetter++;
      if (counterUpperLetter === 2) {
        break;
      }
    }
  }

  return counterUpperLetter;
}
