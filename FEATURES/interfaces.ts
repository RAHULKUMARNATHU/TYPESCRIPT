interface Reportable {

  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name : ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
    console.log(`Summary:${item.summary()}`);
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name:${vehicle.name}`);
//   console.log(`Year:${vehicle.year}`);
//   console.log(`broken:${vehicle.broken}`);
// };

const drink = {
  color: "brown",
  sugar: 40,
  carbonated: true,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

printSummary(oldCivic);
printSummary(drink);
