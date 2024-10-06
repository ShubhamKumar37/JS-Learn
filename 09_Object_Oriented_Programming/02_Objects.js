function multiply(num)
{
    return num * 3;
}

multiply.newValue = 34; // Function can behave like object and function as well.

// All are working
// console.log(multiply(4));
// console.log(multiply.newValue);
// console.log(multiply.prototype);    

function setUser(userName, age)
{
    this.userName = userName;
    this.age = age;
}

setUser.prototype.printMe = function()
{
    console.log(`Age is ${this.age}`);
}

setUser.prototype.incAge = function()
{
    this.age++;
}

const shubham = new setUser("Shubham Kumar", 3);
const sparsh = setUser("Sparsh Sharma", 1);

shubham.printMe();