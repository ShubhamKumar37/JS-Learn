let allButton = document.querySelectorAll(".button");
const body = document.querySelector("body");

allButton.forEach((item) =>
{
    console.log(item);

    item.addEventListener("click", (event) =>
    {
        console.log("This is event = ", event);
        console.log("This is event's target = ", event.target);


        if(event.target.id === "green")
        {
            body.style.backgroundColor = "green";
        }
        else if(event.target.id === "blue")
        {
            body.style.backgroundColor = "blue";
        }
        if(event.target.id === "black")
        {
            body.style.backgroundColor = "black";
            body.style.color = "white";
        }
        if(event.target.id === "pink")
        {
            body.style.backgroundColor = "pink";
            body.style.color = "black"
        }
    });
}); 

