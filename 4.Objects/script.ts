
export{}

// 1st ways to decleare object ::custom type object

interface usersTyped{
    name:string ,
    age:number ,
    address:string
}

let user  : usersTyped= {
    name : "nathu",  
    age : 25,
    address : "India"
}
user.name="rahul"
// user.age="twenty five"  //can't update property
// user.email = "nathu@gmail.com"  //can not add extra property

// console.log(user);


// 2nd way : use of any 
interface usersTyped1{
    name:string ,
    age:number ,
    address:any
}


let user1 :usersTyped1 = {
    name : "nathu",  
    age : 25,
    address : "India"
}
user1.address= 20
// user1.email = "nathu@gmail.com" //can't create new property

// console.log(user1);


// 3rd way : use of any 
let user2 :any = {
    name : "nathu",  
    age : 25,
    address : "India"
}
user2.age= "twenty five"
user2.email = "nathu@gmail.com"

console.log(user2);

