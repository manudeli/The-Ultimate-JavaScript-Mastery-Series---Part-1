const numbers = [1, -1, 2, 3];

// Old way
let sum = 0;
for (let number of numbers) sum += number;

// Reduce
let sumReduced = numbers.reduce(
  (acummulator, currentValue) => acummulator + currentValue,
  0 // Initial Value
);

console.log(sum);
console.log(sumReduced);
