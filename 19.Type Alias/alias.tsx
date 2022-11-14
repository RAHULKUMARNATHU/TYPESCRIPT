type aliasType = string | number | undefined;

let a: aliasType = "nathu";
let b: aliasType = 25;
let c: aliasType = undefined;

/* create Alias type i.e User */

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(User: User): User {
  return { name: "nathu", email: "nathi@gmail.com", isActive: false };
}

createUser({ name: "nathu", email: "nathi@gmail.com", isActive: false });
