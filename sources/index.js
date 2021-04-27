const Index = () => {
  // Comment
  console.log("Hello World");

  let name = "Jonghyeon";
  console.log(name);

  // Cannot be a reserved keyword
  // Should be meaningful
  // Cannot start with a number (1name)
  // Cannot contain a space or hyphen (-)
  // Are case-sensitive

  // Type of undefiend is undefined
  // Type of null is object
  let firstName = undefined;
  let selectedColor = null;
  console.log(
    "Type of firstName: ",
    typeof firstName,
    "Type of selectedColor: ",
    typeof selectedColor
  );
};

Index();
