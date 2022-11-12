// Interface

interface usertype {
  name: string;
  age: number;
  email: string;
  getData: () => string;
}

let data = {
  name: "nahtu",
  age: 25,
  email: "nathu@gmail.com",
  getData: function () {
    return "nathu";
  },
};

console.log(data)
console.log(data.getData())

