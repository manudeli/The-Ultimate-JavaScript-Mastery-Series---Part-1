const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

// Cannot find it because of Difference of reference each other like this
const courseCannotFind = courses.includes({ id: 1, name: "a" });
console.log(courseCannotFind);

// Method "Find" of Array Object: using callback function
const course = courses.find((course) => course.name === "b");
const courseIndex = courses.findIndex((course) => course.name === "b");

console.log(course);
console.log(courseIndex);
