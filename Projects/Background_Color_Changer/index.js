const start = document.getElementById("start");
const stop = document.getElementById("stop");
const body = document.getElementById("body");

let startEndRef;

function printRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 255) + 1;
    return randomNumber;
}


start.addEventListener("click", () =>
{
    const changeColor = () =>
    {
        body.style.backgroundColor = `rgb(${printRandomNumber()}, ${printRandomNumber()}, ${printRandomNumber()})`;
    }
    startEndRef = setInterval(changeColor, 100);
});

stop.addEventListener("click", () =>
{
    clearInterval(startEndRef);
});