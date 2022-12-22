var oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
    summary: function () {
        return "Name : ".concat(this.name);
    }
};
var printVehicle = function (vehicle) {
    console.log("Name:".concat(vehicle.name));
    console.log("Year:".concat(vehicle.year));
    console.log("broken:".concat(vehicle.broken));
    console.log("Summary:".concat(vehicle.summary()));
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
