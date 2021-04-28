console.log(Math.PI);
console.log(Math.random());

console.log(getRandomArbitrary(1, 8));

console.log(Math.round(1.9));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Read about Math Object
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math
