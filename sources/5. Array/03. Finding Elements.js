const numbers = [1, 2, 3, 1, 4];

// Search Index
console.log(numbers.indexOf("a"));
console.log(numbers.indexOf(1));
// Search Index from where
console.log(numbers.indexOf(1, 2));
console.log(numbers.indexOf("1"));
console.log(numbers.lastIndexOf(1));

// isInclude
console.log(numbers.indexOf(1) !== -1); // hard coding
console.log(numbers.includes(1)); // method
