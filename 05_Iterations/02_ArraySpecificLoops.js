const arr1 = [3, 2, 1, 5, 6, 7, 8];

// for(let i of arr1)
// {
//     console.log(i);
// }

const str = "Hello World!";
// for(let i of str)
// {
//     console.log(i);
// }

const map = new Map();

map.set("name", "Shubham");
map.set("age", 22);
// map.set("name", "kumar"); // This will overwrite the previous value
console.log(map);

// for(let key of map)
for(let [key, value] of map) // Using this will destructure the array in key and value form
{
    // console.log(key); // If we directly access the key it will be in array form
    // console.log(key, " = ", value); // Key and value are now single object or entity

}

// for(let i in map) // if we use 'in' in map then nothing will happen but it is still wrong approach to iterate a map 
// {
//     console.log("This is item in map = ", i);
// }

const obj = {
    name: "Shubham",
    age: 22,
    gender: "Male",
    height: 5.9,
    weight: 70,
    DOB: "20-12-1999"
}

// for(let key of obj) // This is not possible with object even if we can use it with map
// {
//     console.log(key);
// }

// for(let [key, value] in obj) // This is also wrong
// for(let key in obj)
// {
//     console.log(key, obj[key]);
// }

for(let item in arr1)
{
    // console.log(item); // This is the key of array means these are the index of array element
    console.log(arr1[item]); // This will print the element of array
}