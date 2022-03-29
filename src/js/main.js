import {
    countNumbers,
    countSpecialCharacters,
    countUpperLetters,
    hasNumber,
    hasProperLength,
    hasSpecialCharacter,
    hasUpperLetter,
    isNotStringError,
    passwordScore,
    additionalMessage,
    getPasswordStrengthRating,
} from "../helpers";

{
    const passwordValue = document.querySelector(".js-passwordInput");
    const errorPasswordReuired = [{ message: "Password is required!" }];

    let errors = [];

    function findPasswordErrors(password) {
        isNotStringError(password);

        const validationErrors = [
            hasProperLength(password),
            hasSpecialCharacter(password),
            hasNumber(password),
            hasUpperLetter(password),
        ];

        errors =
            passwordValue.value !== "" ?
            validationErrors.filter(({ message }) => message) :
            errorPasswordReuired;
    }

    function getPasswordScore(password) {
        return [
            countSpecialCharacters(password),
            countNumbers(password),
            countUpperLetters(password),
        ];
    }

    function renderErrors(value, passwordScore) {
        const finalPasswordScoreData = getPasswordScore(value, getPasswordScore);
        const findIndexMatchedScoreData = passwordScore.findIndex(
            ({ score }) =>
            JSON.stringify(score) === JSON.stringify(finalPasswordScoreData)
        );

        const passwordStrengthMessage = getPasswordStrengthRating(
            findIndexMatchedScoreData
        );

        const messageErrorsToHTML = errors
            .map(({ message }) => {
                return `<li class="form__list-error">
              ${message}
                </li>`;
            })
            .join("");

        if (!errors.length) {
            additionalMessage(`Password is correct and ${passwordStrengthMessage}`);
        }

        const messageErrorsElement = document.querySelector(".js-errors");
        messageErrorsElement.innerHTML = messageErrorsToHTML;
    }

    function render() {
        findPasswordErrors(passwordValue.value);
        renderErrors(passwordValue.value, passwordScore);
    }

    function onFormSubmit(event) {
        event.preventDefault();

        render();

        passwordValue.value.trim();
        passwordValue.focus();
    }

    function init() {
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    }

    init();
}