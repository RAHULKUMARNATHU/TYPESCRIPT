// Different ways in enum
/*Way1 : default value i.e = 0 , 1 , 2, 3..*/
var Days;
(function (Days) {
    Days[Days["mon"] = 0] = "mon";
    Days[Days["tue"] = 1] = "tue";
    Days[Days["wed"] = 2] = "wed";
    Days[Days["thu"] = 3] = "thu";
    Days[Days["fri"] = 4] = "fri";
    Days[Days["sat"] = 5] = "sat";
    Days[Days["sun"] = 6] = "sun";
})(Days || (Days = {}));
var whichDay;
whichDay = Days.mon;
console.warn(whichDay);
/* Way2 : Initialized keys with value */
// enum Days {
//   mon = "monday",
//   tue = "tue",
//   wed = "wed",
//   thu = "thu",
//   fri = "fri",
//   sat = "sat",
//   sun = "sun",
// }
// let whichDay : Days;
// whichDay = Days.mon;
// console.warn(whichDay === "monday");
// console.warn(whichDay );
// enum Days {
//   mon = 10,
//   tue,
//   wed,
//   thu,
//   fri,
//   sat,
//   sun,
// }
// let whichDay: Days;
// whichDay = Days.thu;
// console.warn(whichDay);
/*  */
// enum Days {
//   mon,
//   tue,
//   wed,
//   thu,
//   fri,
//   sat,
//   sun,
// }
// function whichDay(day: Days) {
//   return day;
// }
// console.warn("which day" , whichDay(Days.mon));
