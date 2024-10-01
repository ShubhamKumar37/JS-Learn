console.log("program is started");
// const promise1 = new Promise((resolve, reject) =>
// {
//     setTimeout(() =>
//         {
//             console.log("Async task completed");
//             resolve("Promise is consumed here");
//         }, 1000);
//     });

// // resolve is directly connected with then();

// promise1.then((value) =>
// {
//     console.log(value);
// });

// const promise2 = new Promise((resolve, reject) => {
//     const flag = true;
//     console.log("Hi i am inside a promise");

//     if(!flag)
//     {
//         const obj = {
//             name: "Shubham Kumar",
//             stream: "IT"
//         };
//         resolve(obj);
//     }
//     else
//     {
//         reject("There is error in the code may be the flag responsible");
//     }

// });

// // This is not return as it only return a pending promise object
// // console.log(promise2.then((obj) =>
// // {
// //     console.log(obj);
// //     return obj.name;
// // }))

// promise2.then((obj) =>
// {
//     console.log(obj);
//     return obj.name;
// }).then((value) =>
// {
//     console.log("This then() recieving the value from parent then() return ", value);
// }).catch((error) =>
// {
//     console.log(error);
// }).finally(() =>
// {
//     console.log("Promise is consumed either resolve or rejected");
//     // This is going to run any way if rejected or resolved
// });

// const promise3 = new Promise((resolve, reject) => {
//     const flag = false;
//     console.log("Hi i am inside a promise");

//     if(!flag)
//     {
//         const obj = {
//             name: "Shubham Kumar",
//             stream: "IT"
//         };
//         resolve(obj);
//     }
//     else
//     {
//         reject("There is error in the code may be the flag responsible");
//     }

// });

// (async function promise3Handler()
// {
//     try{
//         const response = await promise3;
//         console.log("This is the resonse = ", response);
//     }
//     catch(error)
//     {
//         console.log("This is the error = ", error);
//     }
// }
// )(); // We also need to run this function inorder to get the reject and resolve values


(async function getData()
{
    try{
        const response = await fetch("https://randomuser.me/api/");
        console.log(response);
    }catch(error)
    {
        console.log("Error = ", error);
    }
})();

// fetch() always return a promise

// fetch("https://randomuser.me/api/")
// .then((data) => data["info"])
// .then((data) => console.log("This is extracted data = ", data))
// .catch((error) => console.log("Here some error arrived = ", error))
// .finally(() => console.log("Fetching data promise is consumed"));