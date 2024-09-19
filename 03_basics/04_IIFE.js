// Immediately Invokked FUnction Expression (IIFE)

// (function dbConnect()
// {
    // It is actually a named IIFE
//     console.log("DB CONNECTED SUCCESSFULLY");
// })();
( function() 
{
    console.log("DB CONNECTED SUCCESSFULLY");
})();
( () =>
{
    console.log("DB CONNECTED SUCCESSFULLY");
})();

// IT IS VERY IMPORTENT TO END THE EXECUTION AS IT DOES NOT KNOW WHERE TO STOP SO AFTER
// NORMAL EXECUTION IF THERE IS NO SEMICOLON IT WILL GIVE A ERROR
// OBJECT.<ANONYMOUS>

// dbConnect();

// There will be 2 paranthesis
// first will be function defination 
// second will be function call

// This is used for immediate funciton call right after the creation 

// We can also remove the name of the function by this and even using => function will also work

// (() => console.log("Hello"))();


((name) => console.log(`My name is ${name}`))("Shubham");