const arr1 = [2, 3, 4, 5, 3, 5];
const arr2 = ["shubham", "nikhil"];
const arr3 = ["shubham", "nikhil", 4, 3, true];
const arr4 = new Array(5, 4, 5, 3, 5);

arr1.push(9);
arr1.pop();

arr1.unshift("First element added to front of array");
arr1.shift(); // Delete the front element

console.table([arr1, arr2, arr3, arr4]);

// console.log(arr1.includes(30));
// console.log(arr1.indexOf(49)); // If yes then it index else -1;

const arr5 = arr1.join(); // This joins the array into string where all the odd index will have ',' in it

// console.log(typeof arr5);
// console.log(arr5[1]);


// Only giving 1 argument will marked as start of the array and go to the last
console.log("1 - ", arr1);
const arr6 = arr1.slice(3, 5); // Not include the last range and also not change the original array
console.log(arr6);
console.log("2 - ", arr1);
const arr7 = arr1.splice(3, 15); // Include the last range but also change the original array as it remove the element which are in range
console.log(arr7);
console.log("3 - ", arr1);

console.log(arr2);

console.log(arr2.slice(32)); // If range out of length then nothing will happen
console.log(arr2.slice(-32)); // If range out of length then nothing will happen
console.log(arr2);