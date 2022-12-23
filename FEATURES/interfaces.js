var oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
    summary: function () {
        return "Name : ".concat(this.name);
    }
};
var printSummary = function (item) {
    console.log("Summary:".concat(item.summary()));
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
var drink = {
    color: "brown",
    sugar: 40,
    carbonated: true,
    summary: function () {
        return "My drink has ".concat(this.sugar, " grams of sugar");
    }
};
printSummary(oldCivic);
printSummary(drink);
