const time = document.getElementById("time");
const button = document.querySelector(".button");

button.addEventListener("click", () =>
{
    setInterval(() =>{
        let date = new Date();
        time.textContent = date.toLocaleTimeString();
    }, 1000);
});