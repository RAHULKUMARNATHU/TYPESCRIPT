class Parent {
  //   name = "nathu";
  name;
  setName(name) {
    this.name = name;
  }
}

class Child extends Parent {
  //   name = "nathu";
  getName() {
    return this.name;
  }
}

let c1 = new Child();
c1.setName("Nathu");
console.log(c1.getName());
