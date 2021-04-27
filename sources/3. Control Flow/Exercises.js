// 1. GetMaximum
const GetMaximum = (numberA, numberB) =>
  numberA > numberB ? numberA : numberB;
let numberMaximum = GetMaximum(1, 2);
console.log(numberMaximum);

// 2. isLandscape
const isLandscape = (width, height) => width > height;
console.log("Is Landscape?:", isLandscape(200, 100));

// 3. FizzBuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Not divisible by 3 or 5 => input
// Not a number => "Not a number"
const fizzBuzz = (input) =>
  typeof input !== "number"
    ? NaN
    : input % 3 === 0 && input % 5 === 0
    ? "FizzBuzz"
    : input % 3 === 0
    ? "Fizz"
    : input % 5 === 0
    ? "Buzz"
    : input;
const output = fizzBuzz(false);
console.log(output);
console.log(":::Caution::: typeof NaN ==", typeof NaN);

// 4. Demerit Points
// Speed Limit = 70km/h
// over 70km/h 5km/h -> 1 point
// example: 70km/h -> Ok, 71km/h -> Point: Ok, 75km/h -> Point: 1
// Mosh's Hint: Math.floor(1.3);
// 12 points -> License suspended
const checkSpeed = (speed, order) => {
  const limitSpeed = 70;
  const kmPerPoint = 5;
  const suspendingPoint = 12;
  const overSpeed = speed - limitSpeed;
  let result =
    overSpeed < kmPerPoint ? "Ok" : Math.floor(overSpeed / kmPerPoint);
  result = result >= suspendingPoint ? "License suspended" : result;
  console.log(
    order + "번째 자동차 과속정보:",
    typeof result === "number" ? result + " Point" : result
  );
};

const speedsOfCars = [70, 72, 75, 91, 130];
speedsOfCars.forEach((speed, index) => {
  const order = index + 1;
  checkSpeed(speed, order);
});

// 5. Even and Odd Numbers
const showNumbers = (limit) => {
  for (i = 0; i <= limit; i++) {
    const isEven = i % 2 === 0;
    console.log(i, isEven ? "EVEN" : "ODD");
  }
};
showNumbers(10);

// 6. Count Truthy
// Falsy -> [undefiend, null, "", false, 0, NaN]
const array = [1, 2, null, undefined, "", 3, null];
const countTruthy = (array) => {
  let count = 0;
  for (let value of array) {
    count += value ? 1 : 0;
  }
  return count;
};
console.log(countTruthy(array));

// 7. String Properties
const movie = {
  title: "괴물",
  releaseYear: 2018,
  rating: 4.5,
  director: "봉준호",
};
const showProperties = (object) => {
  for (key in object)
    if (typeof object[key] === "string") console.log(key, object[key]);
};

showProperties(movie);

// Sum of Multiples of 3 and 5
// Multiples of 3: 3, 6, 9...
// Multiples of 5: 5, 10, 15...
const sum = (limit, addMultiplesNumber1, addMultiplesNumber2) => {
  let result = 0;
  for (let i = 0; i <= limit; i++)
    if (i % addMultiplesNumber1 === 0 || i % addMultiplesNumber2 === 0)
      result += i;

  return result;
};
console.log(sum(10, 3, 5));

// Grade | make function separately to be responsible only for one feature
// Average = 70
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
const marks = [80, 80, 50];

const calculateAverage = (array) => {
  let sum = 0;
  for (element of array) sum += element;
  return sum / array.length;
};
const calculateGrade = (marks) => {
  const average = calculateAverage(marks);
  return (result =
    average >= 90
      ? "A"
      : average >= 80
      ? "B"
      : average >= 70
      ? "C"
      : average > 60
      ? "D"
      : "F");
};
console.log("성적:", calculateGrade(marks));

// Stars
const showStars = (number) => {
  for (let row = 1; row <= number; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
};
showStars(5);

// Prime Numbers | Practice of nested loop
// Prime (whose factors are only 1 and itself)
// Composite ex) 12 = 1, 2, 3, 4, 6, 12
// 11 = 1, 11
// 13 = 1, 13

const isPrime = (number) => {
  for (factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
};

const showPrimes = (limit) => {
  for (number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
};
showPrimes(20);
