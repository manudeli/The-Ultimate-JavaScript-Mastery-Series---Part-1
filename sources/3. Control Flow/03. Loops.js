// Loops = [For, While, Do...while, For...in, For...of]

// Get odds

{
  // For
  for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
  }
}
{
  // While
  let i = 0;
  while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
  }
}
{
  // Do-While : At least execute once
  let i = 0;
  do {
    if (i % 2 !== 0) console.log(i);
    i++;
  } while (i <= 5);
}
{
  // Infinite loop
  let i = 0;
  while (i <= 5) {
    console.log(i);
    // If comment below code, execute infinite loop
    i++;
  }
}

// Examples of For...in, For...of
{
  const person = {
    name: "Jonghyeon",
    age: 30,
  };
  const colors = ["red", "green", "blue"];

  // for-in : take key
  for (let key in person) console.log(key, person[key]);
  for (let index in colors) console.log(index, colors[index]);

  // for-of : take value of array
  for (let color of colors) console.log(color);
}
