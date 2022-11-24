// Interface

interface userType {
  name: string;
  age: number;
  email?: string;
  getData: () => string;
}

let data: userType = {
  name: "nathu",
  age: 25,
  // email: "nathu@gmail.com",
  getData: function () {
    return "nathu";
  },
};

console.log(data)
console.log(data.getData())

