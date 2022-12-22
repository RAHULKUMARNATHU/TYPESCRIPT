const carMakers: string[] = ["ford", " toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150", "f125"], ["corolla"], ["camaro"]];

// Help with inference when extracting values

const car = carMakers[0];

const myCar = carMakers.pop();

// Prevent incompatible values

/*carMakers.push(100);*/

// Help with 'map'

carMakers.map((car: string) => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
