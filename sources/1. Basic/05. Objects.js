const object = () => {
  // Object has properties
  let name = "Jonghyeon";
  let age = 30;
  let person = {
    name: name,
    age: age,
  };

  // Dot Notation
  console.log(person.name);
  // Bracket Notation
  let selection = "name";
  console.log(person[selection]);
};

object();
