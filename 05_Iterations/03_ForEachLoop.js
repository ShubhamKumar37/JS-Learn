const arr = [
    "Shubham", 1, "Nikhil", 2, "Aman", 3, "Rahul", 4, "Raj", 5, "Kumar", 6, "Singh", 7, "Jain", 8, "Sharma", 9, "Gupta", 10
];

// arr.forEach((item) => console.log(item));

function printData(data)
{
    console.log(data);
}

// arr.forEach(printData); // This will also work
// arr.forEach((item) => printData(item)); // This will also work
// arr.forEach(printData(data)); // This will not work as it need a callback function

// This also callback have other parameters 
// arr.forEach((item, index, arr) => console.log(item, index, arr));
// First = item (Element);
// Second = index (index);
// Third = arr (Complete array);

const arrOfObj = [
    {name: "Shubham", age: 22, gender: "Male"},
    {name: "Nikhil", age: 23, gender: "Male"},
    {name: "Aman", age: 24, gender: "Male"},
    {name: "Rahul", age: 25, gender: "Male"},
    {name: "Raj", age: 26, gender: "Male"},
    {name: "Kumar", age: 27, gender: "Male"},
    {name: "Singh", age: 28, gender: "Male"},
    {name: "Jain", age: 29, gender: "Male"},
    {name: "Sharma", age: 30, gender: "Male"},
    {name: "Gupta", age: 31, gender: "Male"}
];

arrOfObj.forEach((item) =>
{
    for(let i in item)
    {
        console.log(item[i]);
    }
})

console.table(arrOfObj);