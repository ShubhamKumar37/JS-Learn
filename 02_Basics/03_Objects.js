// Object literals

// To create a Symbol we have to Symbol func
const sym = Symbol("NewValue");

const obj = {
    name: "Shubham Kumar",
    password: "SK1",
    isLoggedIn: false,
    age: 20,
    favGame: ["Free Fire", "Assassins creed"],
    "Personal Computer" : "Lenevo",

    // Here we will use the symbol as the key because it is a interview quesiton
    // sym : "Shubham Kumar" // By writing this we are not able to create a symbol as it is normal key pair of string
    [sym] : "Shubham Kumar" // Now this is the symbol which is refering the above declaration of symbol
};

// console.log(obj);
// console.log(obj.name);
// console.log(obj.Personal Computer); // This is not possible that's why it is recommend to use [] bracked notation
// console.log(obj["name"]);
// console.log(typeof obj[sym]); // To access any symbol we don't have to use double quote as symbol need to access without double quote

// obj["age"] = 21;
// console.log(obj);

// We can make our object to immutable using Object.freeze(obj_name)
// Object.freeze(obj);
// Now our object is immutable but still if someone try to change , it will not raise any error but no change will occur
// obj.name = "Shubham";
// console.log(obj); // This time obj will not change

obj.greeting = function()
{
    console.log("Hi there i am a human");
}

// console.log(obj.greeting); // If we don't use this () then only the reference of the function will be returned, but execution of function

// console.log(obj.greeting()); // First the greeting() function is printed then the undefined of outter console.log() is printed (second statement is maybe)

obj.greeting2 = function()
{
    console.log(`Hi there, my name is ${this.name}`); // By using "this" keyword we can access the keys of objects
}

console.log(obj.greeting2());