const start = document.getElementById("start");
const stop = document.getElementById("stop");
const body = document.getElementById("body");

let startEndRef = null;

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
    if(!startEndRef)
    {
        startEndRef = setInterval(changeColor, 100);
    }
    console.log("This is start and end ref", startEndRef);
});

stop.addEventListener("click", () =>
{
    clearInterval(startEndRef);
    startEndRef = null;
});