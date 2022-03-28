function additionalMessage(message) {
    const additionalScoreElement = document.querySelector(
        ".js-additionalMessage"
    );

    additionalScoreElement.innerHTML = `${message}`;
}

export default additionalMessage;