class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log(`Hi There!, my name is ${this.name} and my favorite color is ${this.favoriteColor}`);
  }
}

// Node Version of Exporting
// module.exports = Person;
// ES6 Version of Exporting
export default Person;
