namespace UsersUtils {
  export class Parent {
    name;
    setName(name) {
      return (this.name = name);
    }
  }
  export interface userType {
    getName();
  }
}
