{
  // 1. Sum of Arguments

  // sum([1, 2, 3, 4]) => 10
  // Using below method of Array object
  console.log("Array.isArray([])", Array.isArray([]));
  console.log(sum(1, 2, 3, 4));

  function sum(...args) {
    const array = Array.isArray(...args) ? args[0] : args;
    return array.reduce((a, b) => a + b);
  }
}
{
  // 2. Area of Circle
  const circle = {
    radius: 2,
    // can access only for get not set
    get area() {
      return this.radius ** 2 * Math.PI;
      // Check Why above code is Area of Circle http://down.edunet4u.net/KEDNCM/A000800002_20150216/core_e6_mat_01_05_01.pdf
      // Actually, I know this just now!! kk
    },
  };

  // Try setting circle.area (But there's no setter)
  circle.area = 20;

  console.log(circle.area);
}
{
  // 3. Error Handling
  try {
    const numbers = [1, 2, 3, 4];

    const count = countOccurrences(null, 1);
    console.log(count);
  } catch (e) {
    console.log(e);
    console.log(e.message);
    alert(e.message);
  }

  function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) throw new Error("Invalid array");

    return array.reduce((accumulator, current) => {
      const occurrence = current === searchElement ? 1 : 0;
      return accumulator + occurrence;
    }, 0);
  }
}
