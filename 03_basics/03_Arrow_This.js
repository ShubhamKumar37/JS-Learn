const obj = {
    name: "Shubham Kumar",
    password: "SK1",
    isLoggedIn: false,
    age: 20,
    favGame: ["Free Fire", "Assassins creed"],
    "Personal Computer" : "Lenevo",
    greeting: function()
    {
        console.log("Hi there i am a human");
    },
    greeting2: function()
    {
        console.log(`Hi there, my name is ${this.name}`);
        console.log(this);
    }
}

// obj.greeting2();
// console.log(this); // In nodejs enviroment it will return {} empty curly braces

function noraml()
{
    const name = "Shubham Kumar";
    console.log(this);
    // this.name = name; // we can also chnge the value but donn't know why??
    console.log(this.name); // Inside a function this will print undefined

    // this context mainly work insider object not completely with any function
}

// noraml(); // If the function is not in object then "this" will return so many things

// if a function is expression based or noraml expresstion the result will be same but in oject the result will be different

const noraml1 = function()
{
    const name = "Pankaj Kumar"
    console.log(this);
    console.log(this.name);
}

// noraml1();

const normal3 = () =>
{
    const name = "Shubham Kumar";
    console.log(this); // Using arrow function will return a empty object of "this"
    console.log(this.name);
    console.log("Aya the ma ether")
}

// const value = normal3;

// value();

// const add2Value = (a, b) =>
// {
//     return a + b;
// }

// const add2Value = (a, b) => a + b;

// If we want to return object then we have to use paranthesis without return keyword

// const add2Value = (a, b) => {name: "Shubham kumar"}; // This will return undefined
const add2Value = (a, b) => ({name: "Shubham kumar"}) 

console.log(add2Value(5, 2));