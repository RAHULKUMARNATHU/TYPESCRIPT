// var a = 10;
// console.log(a)
// let b : number;
// b =20;
// console.log(b)
var script = /** @class */ (function () {
    function script() {
    }
    script.prototype.test = function () {
        console.log("test function working");
    };
    return script;
}());
var b = new script();
b.test();
