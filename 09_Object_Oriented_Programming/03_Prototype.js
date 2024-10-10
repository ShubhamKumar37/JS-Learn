// As every thing is object in javascript we can add property or method in Object
// and if adding property to object it make available that property to all the other type of object


// Object.prototype.greet = function()
// {
//     console.log("This greet function present in all prototype");
// }


// const obj = {
//         name: "Shubham Kumar",
//         age: 23,
//     };
    
//     // obj.greet(); // By this we can add greet to all of the object 
//     // arr.greet();
    
// let arr = [2, 3, 4, 5, 6];

// Array.prototype.heGreet = function()
// {
//     console.log("This is another prototype in Array");
// }


// arr.heGreet();
// obj.heGreet(); // This have no power to use heGreet

// const teacher = {
//     isTeaching: true,
// };

// const teacherSupport = {
//     isAvailable: false,
// };

// const TASupport = {
//     makeAssissment: "JavaScript Assissment",
//     fullTime: true,
//     __proto__: teacher
// };

// TASupport.__proto__ = teacherSupport;

// // console.log(TASupport.__proto__);

// Object.setPrototypeOf(TASupport, teacherSupport);

let anotherUsername = "Shubham       ";

String.prototype.trueLength = function()
{
    let newString = this.trim();
    console.log(this);
    console.log(`True length of the string is ${newString.length}`);
}

anotherUsername.trueLength();
"Harsh".trueLength();