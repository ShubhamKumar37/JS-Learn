
// This is a object literal which mean literally a object;
const user = {
    userName: "Shubham Kumar",
    isLoggedIn: true,
    favGame: ["Free Fire", "Assassins creed"],

    getUserDetail : function() // To use this keyword inside method we have to use function keywords as well (maybe)
    {
        // console.log("This is user detail methos");
        console.log(`This is the user name = ${this.userName}`);
    }
}

// console.log(user);
// console.log(user.userName);

// user.getUserDetail();

function userDetail(userName, age, gender)
{
    this.userName = userName; // Use of this keyword we can identify which variable are we talking about 
    this.age = age;
    this.gender = gender;

    // If we don't write this it will implecity return the "this" so not writting it will not 
    // make any change 
    // return this;
}


// userDetail("Shubham Kumar", 20, "Male");
// const newUser = userDetail("Shubham Kumar", 20, "Male");
// const newUser2 = userDetail("Sparsh Kumar", 21, "Male");
// const newUser = userDetail("Shubham Kumar", 20, "Male");
// const newUser2 = userDetail("Sparsh Kumar", 21, "Male");
// As we didn't use the new keyword the older instance of this was saved and then overwritted 
// when another time the same function is called , so to overcome this problem we can use "new" keyword
// which will make the new instance of the this object every time
// console.log(newUser2);
// console.log(newUser);

// new keyword is same as constructor function which gives you the new instance of object every time when use
const newUser = new userDetail("Shubham Kumar", 20, "Male");
const newUser2 = new userDetail("Sparsh Kumar", 21, "Male");


console.log(newUser2);
console.log(newUser);
