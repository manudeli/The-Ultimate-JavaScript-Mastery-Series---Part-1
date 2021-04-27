// 1. Performing a task
// name is parameter(매개변수) below function
function greet(name = "No name", lastName = "") {
  console.log(`Hello ${name} ${lastName}`);
}

greet(); // default
greet("Jonghyeon");
greet("Jonghyeon", "Ko");

// 2. Calculating a value
function squre(number) {
  return number * number;
}

// Argument(전달인자) inside Parantheses(괄호) to use function
let number = squre(2);
console.log(number);
