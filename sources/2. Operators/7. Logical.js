console.log(true && true);

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log("Eligible For Loan", eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);

// with Non-booleans
console.log(false || true);
console.log(false || "jonghyeon");
console.log(false || 1);

// Falsy (false)
// undefined
// null
// 0
// false
// ""
// NaN
// Anything that is not Falsy -> Truthy

// Short-circuiting
console.log(false || 1 || 2);

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);
