import {
  countNumbers,
  countSpecialCharacters,
  countUpperLetters,
  hasNumber,
  hasProperLength,
  hasSpecialCharacter,
  hasUpperLetter,
  isNotStringError,
  getPasswordStrengthRating,
} from "../helpers";
import { passwordScoreData } from "./passwordScoreData";

const passwordElement = document.querySelector(".js-passwordInput");
const additionalScoreElement = document.querySelector(".js-finalMessage");
const messageErrorsElement = document.querySelector(".js-errors");

function init() {
  const form = document.querySelector(".form");

  form.addEventListener("submit", onFormSubmit);
}

function onFormSubmit(event) {
  event.preventDefault();

  const validatePasswordErrors = findPasswordErrors(passwordElement.value);

  passwordElement.focus();
  passwordElement.value.trim();

  render(passwordElement.value, validatePasswordErrors);

  if (!validatePasswordErrors.length) {
    passwordElement.value = "";
  }
}

function render(password, errors) {
  renderMessages(password, errors, passwordScoreData);
}

function findPasswordErrors(password) {
  isNotStringError(password);

  const errorPasswordRequired = [{ message: "Password is required!" }];
  const validationErrors = [
    hasProperLength(password),
    hasSpecialCharacter(password),
    hasNumber(password),
    hasUpperLetter(password),
  ];

  return password
    ? validationErrors.filter(({ message }) => message)
    : errorPasswordRequired;
}

function renderMessages(password, errors, passwordScore) {
  const finalPasswordScoreData = getPasswordScore(password);
  const findIndexMatchedScoreData = passwordScore.findIndex(
    ({ score }) =>
      JSON.stringify(score) === JSON.stringify(finalPasswordScoreData)
  );

  const passwordStrengthMessage = getPasswordStrengthRating(
    findIndexMatchedScoreData
  );

  const messageErrorsToHTML = errors
    .map(
      ({ message }) => `
        <li class="form__list-error">
          ${message}
        </li>
      `
    )
    .join("");

  messageErrorsElement.innerHTML = messageErrorsToHTML;

  const finalMessage = `Password is correct and ${passwordStrengthMessage}`;
  additionalScoreElement.textContent = `${!errors.length ? finalMessage : ""}`;
}

function getPasswordScore(password) {
  return [
    countSpecialCharacters(password),
    countNumbers(password),
    countUpperLetters(password),
  ];
}

init();
