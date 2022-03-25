export default function countNumbers(password) {
  let counterNumbers = 0;

  for (const char of password) {
    if (!isNaN(parseFloat(char))) {
      counterNumbers++;
      if (counterNumbers === 3) {
        break;
      }
    }
  }

  return counterNumbers;
}
