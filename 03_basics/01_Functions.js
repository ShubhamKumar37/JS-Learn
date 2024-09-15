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
// console.log(isLogin());  // If no value is passed then undefined is used instead of argument
// console.log(isLogin("Shubham Kumar"));

// Rest or Spread operator(name change with the use case)
function cartPriceAmount(...num1)
{
    // return {...num1}; // Returns a object with key as a index and value as the element
    return num1; // Return a array of all value present in ...num1;
}

// console.log(cartPriceAmount(342));
// console.log(cartPriceAmount(342, 43, 5, 6));

const obj1 = {
    userName: 'Shubham Kumar',
    prices: 342
}

function handleObj(obj)
{
    console.log(`User name is ${obj.userName} and price is ${obj?.price}`);
}

// Even if i use "?" i will get only undefined as result 
handleObj(obj1);