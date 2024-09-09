let arr1 = [1, 2, 3, 4];
let arr2 = [6, 7, 8, 9];

console.table([arr1, arr2]);

// arr1.push(arr2);
console.log(arr1); // This will append the whole array into the array as a element

let arr3 = arr1.concat(arr2); // This will not change the original array infact it return the new array
// console.log(arr3);


let arr4 = [...arr1, ...arr2]; // This is a spread where take a glass and drop it to break it now all element are spreaded
// console.log(arr4);

let arr5 = [1, 2,3 [4, 5, 4, [6, 5, 4, [6, 3, 5, 6], [1, 2, 3, 4]]]]; // In this example we can see the there are multi level of array
let newArr5 = arr5.flat(Infinity); // we have to specify the number of depth to be extracted as a single element

console.log(Array.isArray(arr1));
console.log(Array.from("Shubham")); // Using from we can seperate the element of given argument in array

let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;

console.log(Array.of(num1, num2, num3, num4)); // Returns a new array with all the element in it passed in argument
