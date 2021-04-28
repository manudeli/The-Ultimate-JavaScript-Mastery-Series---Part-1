let x = { value: 10 };
let y = x;

x.value = 20;

console.log(x);
console.log(y);

// Value(Primitive) type: Number, String, Boolean, Symbol, undefined, null
// "number" in function is different with below "number"
let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number);

// Reference: Object, Function, Array
// "obj" in function point below "obj"'s reference
let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);
