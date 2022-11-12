// let s1 = Symbol();
// let s2 = Symbol();

// console.warn(s1 === s2);

// let s1 = Symbol("d1");
// let s2 = Symbol("d2");
// console.warn(s1.toString());

// let s1 = Symbol("d1");

// let data = {
//   [s1]: "some data", //Here : s1 is key
// };

// console.warn(data[s1]);

let demoF1 = Symbol("d1");

class Demo {
  [demoF1]() {
    return "some data";
  }
}

let d1 = new Demo();
console.log(d1[demoF1]());
