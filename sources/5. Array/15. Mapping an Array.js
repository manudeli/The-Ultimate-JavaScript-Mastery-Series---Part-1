const numbers = [1, -1, 2, 3];

//Filtered
const numbersPositive = numbers.filter((number) => number >= 0);

//Using method "Map", "Join" of array object for making html
const items = numbersPositive.map((number) => "<li>" + number + "</li>");
const html = "<ul>" + items.join("") + "</ul>";

console.log(items);
console.log(html);

// Caution:: ()=>{value: number} <---- Can't do this on below example
// in Arrow function "{ }" means code block by default, not object
// if we want to make it short, Use brackets

const items2 = numbersPositive.map((number) => ({ value: number }));

console.log(items2);

// English Time
// Brackets:: (), {}, [], <>
// 1. (): Round Brackets - Parentheses
// 2. {}: Curly Brackets - Braces
// 3. []: Squre Brackets - Brackets
// 4. <>: Angle Brackets - Chevrons

// Chaining:: Make above code into shorter and intuitively
const items3 = numbers
  .filter((number) => number >= 0)
  .map((number) => ({ value: number }))
  .filter((object) => object.value > 1)
  .map((object, index) => ({ ...object, index }));

console.log(items3);
