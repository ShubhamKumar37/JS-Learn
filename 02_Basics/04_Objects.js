// const obj1 = new Object(); // It is singleton object
// const obj1 = {}; // It is not singleton object

// In JavaScript, declaring an object as const only prevents reassignment of the object reference itself, not the manipulation of its properties. You can still add, modify, or delete properties of the object because const applies to the reference, not to the content inside the object.

const obj1 = {
    email: "sk9818281820@gmail.com",
    name:{
        userName: {
            firstName: "Shubham",
            lastName: "Kumar"
        }
    }
};

// console.log(obj1);
// console.log(obj1.name);
// console.log(obj1.name.userName);

// "?" Using this help to handle error if the value doesnot exist in the object,
// so instead of giving error it wil not proceed further
// console.log(obj1.name?.userName.firstName);

const obj2 = {
    1: "a", 2: "b"
};

const obj3 = {
    3: "a", 2: "h"
};

// Giving an extra argument in assign method as empty obj will mark it as a destination object and other will become source 

// and if no empty object is given then all value will be assign to the first object and also return it

// if common key founded then overwrite will happen
// const obj4 = Object.assign({}, obj3, obj2);
// const obj4 = Object.assign(obj3, obj2);
// console.log(obj4);
// console.log(obj3);
// console.log(obj2);

const obj4 = {...obj2, ...obj3};
// console.log(obj4);

// console.log(Object.keys(obj4)); // This return array of keys of object
// console.log(Object.values(obj4)); // This return array of values of object
// console.log(Object.entries(obj4)); // This return 2D array where each element is a array of key and value

// console.log(Object.entries(obj1));

// Destructuring

const {email, name} = obj1;
const {userName: UName} = name;

console.log(email, name);
console.log(UName); // Now i can use this as UName not with userName, if i try to do , it will raise a error