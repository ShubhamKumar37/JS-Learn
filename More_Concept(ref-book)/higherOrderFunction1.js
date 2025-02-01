function add(a) {
    return (b) => a + b;
}

// console.log(add(3)(3));

function func(f) {
    return (...args) => {
        console.log(f(...args));
    }
}

// func(Math.min)(4, 2, 3, 4, 5, 4, 5, 2);

function repeat(n, func) {
    for (let i = 0; i < n; i++) {
        func(i);
    }
}

function check(cond, func)
{
    if(cond) func();
}

repeat(5, (item) => {
    check((item & 1)!== 1, () => {console.log("Item is even", item)});
});