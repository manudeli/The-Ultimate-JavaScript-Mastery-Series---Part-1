const first = [1, 2, 3];
const second = [4, 5, 6];

// Concat:: No change on each original arrays
// const combined = first.concat(second);

// Spread Operator:: absolutely same with above concat method
let combined = [...first, ...second];
combined = [...first, "a", ...second, "b"];

// Slice:: No change on each original arrays
const slice = combined.slice(2, 4);
const sliceFrom = combined.slice(3);

// const copy = combined.slice();
// Spread Operator:: absolutely same with above splice method
const copy = [...combined];

console.log(combined);
console.log(first, second);
console.log(slice);
console.log(sliceFrom);
console.log(copy);

// Using Reference in Array
const third = [{ id: 1 }];
const combinedRefType = third.concat(second);
console.log(combinedRefType);

// Concat copys element's reference not pairs of key, value inside object
console.log(combinedRefType);
