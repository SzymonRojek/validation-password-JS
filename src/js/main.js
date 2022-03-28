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
    additionalMessage,
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

    function getMessageScoreByValue(object, callback) {
        isNotFunctionError(callback);

        return (
            Object.keys(object).find((key) =>
                object[key].find(
                    (a) => JSON.stringify(a) === JSON.stringify(callback())
                )
            ) || "& weak"
        );
    }

    function renderErrors(value) {
        const passwordStrength = getMessageScoreByValue(passwordScore, () =>
            getPasswordScore(value)
        );

        const messageErrorsToHTML = errors
            .map(({ message }) => {
                return `<li class="form__list-error">
              ${message}
                </li>`;
            })
            .join("");

        if (!errors.length) {
            additionalMessage(`Password is correct and ${passwordStrength}`);
        }

        const messageErrorsElement = document.querySelector(".js-errors");
        messageErrorsElement.innerHTML = messageErrorsToHTML;
    }

    function render() {
        findPasswordErrors(passwordValue.value);
        renderErrors(passwordValue.value);
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