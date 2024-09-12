function add2Number(a, b)
{
    console.log(a + b);
    return a + b;
}

// const result = add2Number(4, 2);
// console.log(result);

// function isLogin(userName)
// {
//     return `Welcome! ${userName}`;
// }
function isLogin(userName="Siwa")
{
    return `Welcome! ${userName}`;
}

// isLogin("Shubham Kumar"); // Only this will do nothing as function is only invoked not stored any value returned from it
console.log(isLogin());  // If no value is passed then undefined is used instead of argument
console.log(isLogin("Shubham Kumar"));