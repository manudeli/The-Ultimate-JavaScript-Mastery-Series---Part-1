const numbers = [2, 3, 1];
console.log(numbers);
// Sorting
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

// Sorting Elements of Reference type in Array
const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

courses.sort((a, b) => {
  // a < b => -1
  // a > b => 1
  // a === b => 0

  // Use toLowercase for Sorting by order of alphabet
  // regardless of any cases: Upper or Lower
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);

// MDN Link
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
