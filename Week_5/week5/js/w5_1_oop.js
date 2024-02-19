//A constructor function name usually starts with a capital letter
//— this convention is used to make constructor functions easier to recognize in code.

function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert(`Hi! I'm ${this.name}.`);
  };
}

// constructor calls:
//the new keyword is used to tell the browser we want to create a new object instance,
//followed by the function name with its required parameters contained in parentheses,
//and the result is stored in a variable
//— very similar to how a standard function is called.
//
// let person1 = new Person('Bob');
// let person2 = new Person('Sarah');
// let person3 = new Person('Jimmy');
// let person4 = new Person('Claude');


/* === A MORE COMPLEX CONSTRUCTOR FUNCTION === */
function Person(first, last, age, gender, interests) {
  this.name = {
     first,
     last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(`${this.name.first} ${this.name.last} is ${this.age} years old.
      He likes ${this.interests[0]} and ${this.interests[1]}.`);
  };
  this.greeting = function() {
    alert(`Hi! I'm ${this.name.first}.`);
  };
}

const person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
const person2 = new Person('Cathy', 'Bennet', 48, 'female', ['diving']);
const person3 = new Person('Pat', 'LaVerde', 19, '', ['surfing', 'martial arts', 'pottery']);
