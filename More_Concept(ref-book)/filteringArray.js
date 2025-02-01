function repeat(n, action)
{
    for(let i = 0; i < n; i++)
    {
        action(i);
    }
}

function filtering(arr, test)
{
    let newArr = [];
    for(let i of arr)
    {
        if(!test(i)) newArr.push(i);
    }
    return newArr;
}

let arr1 = [];
repeat(20, (item) => arr1.push(item));
arr1 = filtering(arr1, (item) => (item & 1))
repeat(arr1.length, (item) => console.log("This item is even = ", arr1[item]))
