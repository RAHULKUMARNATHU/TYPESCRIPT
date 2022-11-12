"use strict";
exports.__esModule = true;
var user = {
    name: "nathu",
    age: 25,
    address: "India"
};
user.name = "rahul";
var user1 = {
    name: "nathu",
    age: 25,
    address: "India"
};
user1.address = 20;
// user1.email = "nathu@gmail.com" //can't create new property
// console.log(user1);
// 3rd way : use of any 
var user2 = {
    name: "nathu",
    age: 25,
    address: "India"
};
user2.age = "twenty five";
user2.email = "nathu@gmail.com";
console.log(user2);
