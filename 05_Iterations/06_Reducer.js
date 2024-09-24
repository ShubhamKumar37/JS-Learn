const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const initialValue = 6;

// const arr2 = arr1.reduce((accumulator, currentValue) => { 
//     console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
//     return accumulator + currentValue;
// }, initialValue);

// const arr2 = arr1.reduce((accumulator, currentValue) => { 
//    return accumulator + currentValue;
// }, initialValue);

const arr2 = arr1.reduce((acc, currValue) => acc + currValue, initialValue);
// const arr2 = arr1.reduce((acc, currValue) => (acc + currValue), initialValue);


console.log(arr2, arr1)

const shoppingCart = [
    {name: "T-Shirt", price: 20},
    {name: "Jeans", price: 50},
    {name: "Shoes", price: 80},
    {name: "Watch", price: 120},
    {name: "Belt", price: 30}
];

const arr3 = shoppingCart.reduce((acc, curr) => acc + curr.price, 0);

console.log(arr3);