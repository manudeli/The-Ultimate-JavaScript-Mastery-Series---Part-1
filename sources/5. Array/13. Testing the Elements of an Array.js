const numbers = [1, 2, -1, 3];

// every()
// some()

// Testing on every elements of array
const isAllPositive = numbers.every((value) => value >= 0);
console.log(isAllPositive);

// Testing on some elements of array
const isSomePositive = numbers.some((value) => value >= 0);
console.log(isSomePositive);
