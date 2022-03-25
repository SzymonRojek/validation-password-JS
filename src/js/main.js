import {
  countNumbers,
  countSpecialCharacters,
  countUpperLetters,
  hasNumber,
  hasProperLength,
  hasSpecialCharacter,
  hasUpperLetter,
  isNotFunctionError,
  isNotStringError,
  passwordScore,
} from "../helpers";

function validatePassword(password) {
  isNotStringError(password);

  const validationErrors = [
    hasProperLength(password),
    hasSpecialCharacter(password),
    hasNumber(password),
    hasUpperLetter(password),
  ];

  const onlyErrors = validationErrors
    .filter(({ message }) => typeof message === "string")
    .map(({ message }) => {
      console.log(message);
    });

  return !onlyErrors.length ? "Password is correct" : onlyErrors;
}

function getPasswordScore(password) {
  return [
    countSpecialCharacters(password),
    countNumbers(password),
    countUpperLetters(password),
  ];
}

function getMessageScoreByValue(object, callback) {
  isNotFunctionError(callback);

  return (
    Object.keys(object).find((key) => {
      return object[key].find(
        (a) => JSON.stringify(a) === JSON.stringify(callback())
      );
    }) || "& weak"
  );
}

function displayMessage(password, passwordScore) {
  const validationResult = validatePassword(password);
  const passwordStrength = getMessageScoreByValue(passwordScore, () =>
    getPasswordScore(password)
  );

  return typeof validationResult === "string"
    ? `${validationResult} ${passwordStrength}`
    : validationResult;
}

const message = displayMessage("@#2aaaa", passwordScore);
console.log(message);
