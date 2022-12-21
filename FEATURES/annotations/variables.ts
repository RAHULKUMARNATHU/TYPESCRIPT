let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in Objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "blue", "green"];

let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}

let car: Car = new Car();

// Object literals

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function 
const logNumber:(i:number) =>void = (i:number) =>{
    console.log(i);
    
}
