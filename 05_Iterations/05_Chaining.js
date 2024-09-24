arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr1 = undefined;


const arr2 = arr1
?.map((item) => item * 10)
?.map((item) => item * 10)
?.filter((item) => item > 500);

console.log(arr2);