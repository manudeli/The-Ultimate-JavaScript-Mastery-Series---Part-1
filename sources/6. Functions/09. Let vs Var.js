let x = 0;
var y = 0;

function start() {
  for (var i = 0; i < 5; i++) console.log(i);
  if (true) {
    var color = "red";
    let age = 30;
  }

  // we can access variable using keyword "var", function-scoped
  console.log(i);
  console.log(color);
  // console.log(age);
}

// var => function-scoped
// ES6 (ES2015): let, const => block-scoped

start();

var color = "red";
let age = 30;

function sayHi() {
  console.log("hi");
} // Need to be prevented by keyword "Modules"

console.log(window.color);
console.log(window.age);
window.sayHi(); // we can use as global function
