function repeat(n, action)
{
    for(let i = 0; i < n; i++)
    {
        action(i);
    }
}

// repeat(4, console.log);

let arr1 = [];
repeat(5, (element) =>
{
    arr1.push(element + 1123);
});

arr1.forEach((item) =>
{
    arr1.push(item);
})

repeat(10, (i) => console.log(arr1[i]))