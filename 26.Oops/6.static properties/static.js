// Utility Function

// class User {
//   constructor(name, age, income) {
//     this.name = name;
//     this.age = age;
//     this.income = income;
//   }

//   static compareByAge(user1, user2) {
//     return user1.age - user2.age;
//   }

//   static compareByIncome(user1, user2) {
//     return user1.income - user2.income;
//   }
// }

// const user1 = new User("Rahul", 25 ,5000);
// const user2 = new User("Nathu", 35 , 6000);
// const user3 = new User("Vivek", 30 , 500);

// const Users = [user1, user2, user3];

// // Users.sort((a, b) => {
// //   a.age - b.age;
// // });

// // Users.sort(User.compareByAge); // User :: className
// Users.sort(User.compareByIncome)//compare by income

// console.log(Users);

/******************************/

// Increment

// let id = 1;
// class User {
//   static id = 1;
//   constructor(name, age, income) {
//     this.name = name;
//     this.age = age;
//     this.income = income;
//     this.id = User.id++;
//   }
// }

// const user1 = new User("Rahul", 25, 5000);
// const user2 = new User("Nathu", 35, 6000);
// const user3 = new User("Vivek", 30, 500);

// console.log(user1, user2, user3);

// Configuration

// class Config {
//   static dbUser = "username";
//   static dbPassword = "password";
//   static apiToken = "agsfdtya";
// }

// console.log(Config.apiToken);

/* ************************* */

/* static function Accessibility */

class User {
  static cache = {
    1: "some value",
  };

  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
  }

  // static compareByAge(user1, user2) {
  //   return user1.age - user2.age;
  // }

  // static compareByIncome(user1, user2) {
  //   return user1.income - user2.income;
  // }

  // static cacheCheck() {
  //   console.log(this.cache);
  // }

  cacheCheck() {
    console.log(User.cache);
  }

  // static hasInCache() {
  //   // console.log(this.cache);
  //   this.cacheCheck();
  // }

  static hasInCache() {
    console.log(User.cache);
  }

/* Automatically called */
  static {
    console.log("initialized");
  }
}

// User.hasInCache();
// const user1 = new User("Rahul", 25, 5000);
// user1.cacheCheck();
// console.log(user1.cacheCheck);
User.hasInCache();

// User.hasInCache();
