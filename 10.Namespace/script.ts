// Namespace
// tsc script.ts --outfile out.js --> node out.js

// namespace UsersUtils {
//   export class Users {
//     getName() {
//       return "nathu";
//     }
//   }
// }

// let u1 = new UsersUtils.Users();

// console.warn(u1.getName());

// way2  : Namespace with parent class

// /// <reference path = "./utils.ts" />
// namespace UsersUtils {
//   export class Users extends Parent {
//     getName(name) {
//       return this.name;
//     }
//   }
// }

// let u1 = new UsersUtils.Users();

// console.warn(u1.setName("Nathu"));

// way 3 : namespace with  interface

/// <reference path = "./utils.ts" />
namespace UsersUtils {
  export class Users extends Parent implements userType {
    getName() {
      return this.name;
    }
  }
}

let u1 = new UsersUtils.Users();

console.warn(u1.setName("Nathu"));

console.warn(u1.getName());
