"use strict";
exports.__esModule = true;
var student_1 = require("./student");
var teacher_1 = require("./teacher");
var teacher = new teacher_1["default"]();
console.warn(teacher.data);
var student = new student_1["default"]();
console.warn(student.data);
