import {
  countNumbers,
  countSpecialCharacters,
  countUpperLetters,
  hasNumber,
  hasProperLength,
  hasSpecialCharacter,
  hasUpperLetter,
  isNotStringError,
  additionalMessage,
  getPasswordStrengthRating,
} from "../helpers";
import { passwordScoreData } from "./passwordScoreData";

{
  let errors = [];

  function findPasswordErrors(password) {
    isNotStringError(password);

    const errorPasswordReuired = [{ message: "Password is required!" }];
    const validationErrors = [
      hasProperLength(password),
      hasSpecialCharacter(password),
      hasNumber(password),
      hasUpperLetter(password),
    ];

    errors = password
      ? validationErrors.filter(({ message }) => message)
      : errorPasswordReuired;
  }

  function getPasswordScore(password) {
    return [
      countSpecialCharacters(password),
      countNumbers(password),
      countUpperLetters(password),
    ];
  }

  function renderMessages(password, passwordScore) {
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

    const messageErrorsElement = document.querySelector(".js-errors");
    messageErrorsElement.innerHTML = messageErrorsToHTML;

    const additionalScoreElement = document.querySelector(".js-finalMessage");
    const finalMessage = `Password is correct and ${passwordStrengthMessage}`;
    additionalScoreElement.textContent = `${
      !errors.length ? finalMessage : ""
    }`;
  }

  function render(password) {
    findPasswordErrors(password);
    renderMessages(password, passwordScoreData);
  }

  function onFormSubmit(event) {
    const passwordElement = document.querySelector(".js-passwordInput");
    event.preventDefault();

    passwordElement.focus();
    passwordElement.value.trim();

    render(passwordElement.value);

    if (!errors.length) {
      passwordElement.value = "";
    }
  }

  function init() {
    const form = document.querySelector(".form");

    form.addEventListener("submit", onFormSubmit);
  }

  init();
}
