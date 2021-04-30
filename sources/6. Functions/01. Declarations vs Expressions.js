// In JavaScript, There's 2 way to define a function

walk(); // Able to use cause of Hoisting(function)

// 1. Declaration of Function ::: Hoisting
function walk() {
  console.log("walk");
} // no semi colon

// 2-1. Expression of Name Function :::
// Set variable to a function (cause of Function is an Object)
let run1 = function walk() {
  console.log("run1");
};

// 2-2. Expression of Anonymous Function
// let run2 = function () {
//   console.log("run2");
// };
let run2 = () => console.log("run2");

run1(); // can not use expression upper than declation like variable
run2();
