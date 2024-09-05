let symbol1 = Symbol('123');


console.log(symbol1);

const bigNumber = 234234234243243n; // Due to this last n it make the variable as BigInt
console.log(bigNumber);

// All the value which are assinged in stack memory will get the copy of that variable if created a new one
// These copy variable are done with primitive data tye
// But in head we get the refernce of the memory and when some new variable is assinged to same bind then same refernce is provided

let number = 234;
let num = number;

console.table([number, num]);
num = 12;
console.table([number, num]); // This time value will change because number is primitive data type where copy of value is assinged no reference

const obj1 = {
    name: "Shubham kumar",
    value: 20
};

const obj2 = obj1;

console.table([obj1, obj2]);

obj2.value = 25; // Now due to this change both of the bind value get changed because both have the same refernce
console.table([obj1, obj2]);