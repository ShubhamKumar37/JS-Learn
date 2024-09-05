const name = "shubham kumar";

console.log(`My name is ${name}.`);

const value1 = new String("Hello world");

console.log(value1);
console.log(value1.length);
console.log(value1.charAt(3));
console.log(value1.indexOf('lo'));

console.log(value1.substring(2, 3));


const value2 = "shubham";
console.log(value2.slice(-7, 4))

console.log(value2.replace("h", "HaH"));

const value3 = "https://google.com/dashboard%20myprofile";

console.log(value3.replace('%20', "-"))