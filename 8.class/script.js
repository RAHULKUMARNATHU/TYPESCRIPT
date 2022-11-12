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
var App = /** @class */ (function () {
    function App(name) {
        this.name = name;
    }
    App.prototype.getData = function () {
        //   console.warn("Name", this.name);
        return this.name;
    };
    return App;
}());
var a1 = new App("nathu");
console.warn(a1.getData());
