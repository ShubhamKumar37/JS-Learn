// The best practice to add event is to use addEventListener
// document.getElementById("img2").addEventListener("click", (event) => {
    // console.log("Image clicked");
    // event.stopPropagation();
    // This will help to not move the control to upper
    // parent or say no bubbling going to happen
// }, false);
// document.getElementById("image-list").addEventListener("click", (event) => {
//     console.log("Image list is clicked");
// }, false);

// this is event propogation where which event is going to 
// execute first is decided (maybe) 
// when both of the event are marked as false then bubbling 
// happens which mean bubble go from bottom to up 
// like this first the inner most element event going to triger
// then go to upper level 

// Capturing mode is same but the difference is to go 
// top to bottom

// document.getElementById("google-link").addEventListener("click", (event) => {
//     event.preventDefault();  // Add parentheses to call the method
//     console.log(event.target);
//     console.log("Google clicked");
// }, false);

document.addEventListener("click", (event) =>
{
    console.log(event);
    console.log(event.target.parentNode);
    if(event.target.tagName === "IMG")
    {
        const removeElement = event.target.parentNode;
        console.log(removeElement.id);
    
        removeElement.remove();
    }
    console.log(event.target.tagName); 
})