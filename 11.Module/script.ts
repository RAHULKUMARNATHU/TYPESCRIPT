import sLogin from "./student";
import tLogin from "./teacher";

let teacher = new tLogin();
console.warn(teacher.data);

let student = new sLogin();
console.warn(student.data);
