{
  // 1. Array from Range
  const numbers = arrayFromRange(-10, -4);
  console.log(numbers);
  function arrayFromRange(min, max) {
    const array = [];
    for (let element = min; element <= max; element++) array.push(element);

    return array;
  }
}
{
  // 2. Includes
  const numbers = [1, 2, 3, 4];

  console.log(numbers.includes(1));

  console.log(isIncludes(numbers, 1));

  function isIncludes(array, searchElement) {
    for (let element of array) {
      return element === searchElement;
    }
    return false;
  }
}
{
  // 3. Except
  const numbers = [1, 2, 3, 4, 1, 1];
  const output = except(numbers, [1, 2, 5]);
  console.log(output);
  function except(array, excludeds) {
    return array.filter((element) => {
      let isFilter = true;
      for (excluded of excludeds) if (element === excluded) isFilter = false;
      return isFilter;
    });
  }
}
{
  // 4. Moving an Element
  const numbers = [1, 2, 3, 4];
  const output = move(numbers, 0, 1);
  console.log(output);

  function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0)
      return console.error("Invalid offset.");
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
  }
}
{
  // 5. Count Occurences
  const numbers = [1, 2, 3, 4, 1];
  const count = countOccurrences(numbers, 1);
  console.log(count);

  function countOccurrences(array, searchElement) {
    // let count = 0;
    // array.forEach((value) => {
    //   if (value === searchElement) count += 1;
    // });
    // return count;

    // Can change above code like below
    return array.reduce((count, value) => {
      console.log(count, value, searchElement);
      return value === searchElement ? count + 1 : count;
    }, 0);
  }
}
{
  // 6. Get Max
  const numbers = [1, 5, 11, 2, 32, 3, 4];
  const max = getMax(numbers);
  console.log(max);
  function getMax(array) {
    if (array.length === 0) return undefined;

    // :::: Way 1 ::::
    // let max = array[0];
    // for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];
    // return max;

    // :::: Way 2 ::::
    return array.reduce((a, c) => (a > c ? a : c));

    // :::: Way 3 ::::
    return array.length === 0 ? undefined : array.sort((a, b) => b - a)[0];
  }
}
{
  // 7. Movies
  const movies = [
    { title: "a", year: 2018, rating: 4.5 },
    { title: "b", year: 2018, rating: 4.7 },
    { title: "c", year: 2018, rating: 3 },
    { title: "d", year: 2017, rating: 4.5 },
  ];

  // All the movies in 2018 with rating > 4
  // Sort them by their rating
  // Descending order
  // Pick their title

  // * Result expected: ["b", "a"]

  console.log(
    movies
      .filter((movie) => movie.year === 2018 && movie.rating >= 4)
      .sort((a, b) => b.rating - a.rating)
      .map((movie) => movie.title)
  );
}
