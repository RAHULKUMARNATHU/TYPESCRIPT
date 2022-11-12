// Different ways to declear class

// way1 ::without passing argument

// class App {
//   name = "nathu";
//   constructor() {
//     console.warn("constructor");
//   }

//   getData() {
//     console.warn("Name", this.name);
//   }
// }

// let a1 = new App();
// a1.getData();


// way 2 :: with passing argument in constructor

// class App {
//   name;
//   constructor(name) {
//     this.name = name;
//   }

//   getData() {
//     console.warn("Name", this.name);
//   }
// }

// let a1 = new App("nathu");
// a1.getData();



// way3 :: passing argument with decleared datatype
class App {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getData(): string {
    //   console.warn("Name", this.name);
    return this.name;
  }
}

let a1 = new App("nathu");
console.warn(a1.getData());
