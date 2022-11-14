// class script {
//     name="";
//     age = 0;
//     email =""
//     constructor( name ,  age ,email) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//         console.warn("Here constructor");
//     }
//     displayVal(){
//         console.log(this.name , this.email , this.age);
//     }
// }
// const u1= new  script("nathu" , 25 , "nathu@gmail.com")
// u1.displayVal()
var user = /** @class */ (function () {
    function user(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    user.prototype.displayVal = function () {
        console.log("display val");
        console.log(this.name, this.age, this.email);
    };
    return user;
}());
var u1 = new user('nathu', 20, "nathu@gmail.com");
u1.displayVal();
