interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
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

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name:${vehicle.name}`);
  console.log(`Year:${vehicle.year}`);
  console.log(`broken:${vehicle.broken}`);
  console.log(`Summary:${vehicle.summary()}`);
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

printVehicle(oldCivic);
