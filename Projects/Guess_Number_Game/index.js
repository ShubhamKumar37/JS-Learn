const gameResult = parseInt(Math.random() * 10 + 1); 
const inputGuess = document.getElementById("input-guess");
const submitButton = document.getElementById("submit-guess");
const resultElement = document.getElementById("result-guess");
const prevGuess = document.getElementById("prev-guess");

let prevGuessArray = [];
let possibleGuess = 10;
console.log("This is the result = ", gameResult)

// console.log(inputGuess.value , "<- this is the value");   

submitButton.addEventListener("click", (event) =>
{
    event.preventDefault;

    if(validateInput(inputGuess.value))
    {
        prevGuessArray.push(parseInt(inputGuess.value));
        console.log(prevGuessArray);
        // console.log("This is the user input = ", inputGuess.value);
    }
    inputGuess.value = '';
});

function validateInput(num)
{
    if(num < 1 || num > 100)
    {
        // Please enter number between 1 and 100 (inclusive)
        resultElement.innerHTML = "Please enter number between 1 and 100 (inclusive)";
        return false;
    }
    return true;
}