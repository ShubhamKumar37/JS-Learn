const gameResult = parseInt(Math.random() * 100 + 1);
const inputGuess = document.getElementById("input-guess");
const submitButton = document.getElementById("submit-guess");
const resultElement = document.getElementById("result-guess");
const prevGuess = document.getElementById("prev-guess");
const remainingGuess = document.getElementById("remaining-guess");

let prevGuessArray = [];
let possibleGuess = 10;

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (gameResult === parseInt(inputGuess.value)) {
        displayResult("You Win");
    }
    else if (possibleGuess === 1) {
        displayResult("You loose try again");
    }

    else if (validateInput(inputGuess.value)) {
        possibleGuess--;
        remainingGuess.textContent = possibleGuess;
        addElementArray(inputGuess.value);
    }
    inputGuess.value = '';
});

function addElementArray(num) {
    prevGuessArray.push(parseInt(num));
    prevGuess.innerHTML = prevGuessArray.join(" - ");
}

function validateInput(num) {
    if (num < 1 || num > 100) {
        resultElement.innerHTML = "Please enter number between 1 and 100 (inclusive)";
        resultElement.style.color = 'red';
        return false;
    }

    resultElement.innerHTML = "";
    return true;
}

function displayResult(text) {

    resultElement.style.color = possibleGuess === 1 ? 'red' : 'green';

    possibleGuess = 10;
    resultElement.innerHTML = text;
    prevGuess.innerHTML = "";
    remainingGuess.innerHTML = possibleGuess;
    prevGuessArray = [];
    gameResult = parseInt(Math.random() * 100 + 1);
}