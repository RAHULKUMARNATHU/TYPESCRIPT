// function declearation in different  ways
// Way 1 ::
// function Cals(): number {
//   return 10 + 10;
//   //   console.log(10);
// }
// console.log(Cals());
// way 2 :: defined type argument
// function Cals(a: number, b: number): number {
//   return a + b;
// }
// console.log(Cals(10, 20));
// way 3 ::condition argument
function Cals(a, b) {
    return b ? a + b : a;
}
console.log(Cals(10, 5));
