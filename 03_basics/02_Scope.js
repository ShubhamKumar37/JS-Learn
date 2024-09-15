// let a = 10;
// const b = 20;
// var c = 30;
// console.table([a, b, c]);
let a = 100


if(true)
{
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner a = ", a);
}

// console.log(a); // Raised a error
// console.log(b); // Raised a error
// console.log(c); // No error raised

function one()
{

    const userName = "Shubham";
    function two()
    {
        const password = "Hello@33";
        console.log(userName);
        console.log(password);
    }
    // console.log(password); // This is not valid as parent is tring to access the value of this children scope
    two();
}

// one();

// Here both will run normally
console.log(addOne(12));
function addOne(val)
{
    return val + 1;
}

// console.log(addTwo); // This will cause the error and a function holding expresstion always give an error but directly function will not
const addTwo = function(val)
{
    return val + 2;
}

// Here both will run normally 
// console.log(addOne(32));
// console.log(addTwo(32));