const now = new Date();
const date1 = new Date("May 11 2018 09:00");
// Caution:: Month number has to be -1 ex) May === 4
const date2 = new Date(2018, 4, 11, 9);

console.log(now, date1, date2);

// Use Date auto completion of get, set
// now.getXXXXX
console.log(new Date(now.setFullYear(2017)));
// now.setXXXXX
console.log(now.getFullYear());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
