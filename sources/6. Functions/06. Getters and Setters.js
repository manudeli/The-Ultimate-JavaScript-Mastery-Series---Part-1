const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  // Keyword "get" for Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "John Smith";

// getters => access properties
// setters => change (mutate) them

console.log(person.fullName);
console.log(person);
