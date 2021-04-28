// Object-oriented Programming (OOP)

// Two ways of Create Object
// 1. Factory Function | Camel Notation
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// 2. Constructor Function | Pascal Notation
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
  this.showRadius = function () {
    console.log("showRadius::", this.radius);
  };
}

const circleNew = {};
Circle.call(circleNew, 33);
circleNew.showRadius();

// Keyword "call", "apply"
const mike = {
  name: "Mike",
};
function showThisName(sentence) {
  console.log(this.name, sentence);
}
showThisName.call(mike, `hello ${mike.name}`);
showThisName.apply(mike, [`hello ${mike.name}`]);

// * Keyword "new" makes 3 things under the hood, but we can't see that
// If we don't use new Keyword "this" will point global
const circle = new Circle(1);
// 1. Keyword "new" makes empty JavaScript object
//    const circle = {}
// 2. Keyword "this" points above object: {}
// 3. Return this

// Dynamic Nature of Objects
console.log(circle);
circle.radius = 2;
circle.draw = function () {
  console.log("draw2");
};
circle.draw();

console.log(circle);

// Can't not reassign const object directly like below
// circle = {};

// Keyword "delete" to delete property of object
delete circle.radius;
delete circle.draw;
console.log(circle);

// Show difference between Factory and Constructor
console.log("Factory:", circle.constructor);
console.log("Constructor:", circle2.constructor);

// Every JavaScript Object has constructor property
let x = {};
// let x = new Object();
console.log(x.constructor, "<- x={} made by constructor");

// Other Constructor // we just use following literal
object = new Object(); // {}
string = new String(); // '',"",``
boolean = new Boolean(); // true, false
number = new Number(); // 1, 2, 3
console.log(object);
console.log(string);
console.log(boolean);
console.log(number);

// Function is also an Object
console.log(Circle.name); // name of function
console.log(Circle.length); // how many of arguments
console.log(Circle.constructor);

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//       console.log("draw");
//     };
//   }
// make an Object of function like above function
const Circle3 = new Function(
  "radius",
  `
  this.radius = radius;
  this.draw = function(){
      console.log('draw')
  }`
);

circle3 = new Circle3(1);
console.log(circle3);
