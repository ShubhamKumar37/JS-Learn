// const score = 2342;
// let name = "2342a"; // If any string occur then NaN will be the type after conversion even through the type will be number

// console.log(typeof score);

// name = null; // When we convert the null to number then it give 0 as the answer
// name = undefined; // For undefined this will give NaN when type conversion occur
// name = Number(name);
 

// console.log(typeof name);
// console.log( name);

// let isLogged = 1;
// let isLogged = ""; false
let isLogged = "Shubham kumar"; true

let isLoggedBool = Boolean(isLogged);

// console.log(isLoggedBool);



// ********************************** Operation **********************************

let str1 = "hello ";
let str2 = "world";
let str3 = str1 + str2; // This is the way of string concatenation
// console.log(str3);

// console.log("1" + 4);
// console.log(1 + "4");
console.log(1 + 2 + "2");

console.log(true);
console.log(+"shub");// 1. Implicit type conversion
console.log("1" + 4); // Output: "14"
console.log(1 + "4"); // Output: "14"
console.log(1 + 2 + "2"); // Output: "32"

// 2. Unary plus operator (+) with strings
console.log(+"shub"); // Output: NaN (because "shub" cannot be converted to a number)
console.log(+true); // Output: 1
console.log(+false); // Output: 0

// 3. Boolean conversion
console.log(Boolean("")); // Output: false
console.log(Boolean("hello")); // Output: true
console.log(Boolean(0)); // Output: false
console.log(Boolean(1)); // Output: true

// 4. Null and undefined
console.log(null + 1); // Output: 1 (because null is converted to 0)
console.log(undefined + 1); // Output: NaN (because undefined is converted to NaN)
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false

// 5. String concatenation with numbers
console.log("hello" + 123); // Output: "hello123"
console.log(123 + "hello"); // Output: "123hello"

// 6. Implicit type conversion with objects
console.log({} + 1); // Output: "[object Object]1" (because {} is converted to "[object Object]")
console.log([1, 2, 3] + 1); // Output: "1,2,31" (because [1, 2, 3] is converted to "1,2,3")