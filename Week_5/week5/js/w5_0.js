// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32,
//   gender: 'male',
//   interests: ['music', 'skiing'],
//   bio() {
//     alert(`${this.name[0]} ${this.name[1]} is ${this.age} years old.
//       He likes ${this.interests[0]} and ${this.interests[1]}.`);
//   },
//   greeting() {
//     alert(`Hi I'm ${this.name[0]}.`);
//   }
// };

// an object is made up of multiple members,
// each of which has a name (e.g. name and age above),
// and a value (e.g. ['Bob', 'Smith'] and 32).
// Each name/value pair must be separated by a comma,
// and the name and value in each case are separated by a colon.

// The value of an object member can be pretty much anything
// — in our person object we've got a string, a number, two arrays, and two functions.
// The first four items are data items, and are referred to as the object's properties.
// The last two items are functions that allow the object to do something with that data,
// and are referred to as the object's methods.

/* === SUB NAME SPACES === */
const person = {
  name: {
    first: 'Bob',
    last: 'Smith'
  },
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  //movies: [{ name: 'The Godfather', date: 1972 }, { name: 'Pulp Fiction', date: 1993 }],
  movies: [
    {
      name: 'The Godfather', date: 1972
    }, {
      name: 'Pulp Fiction', date: 1993
    }
  ],
  bio() {
    alert(`${this.name.first} ${this.name.last} is ${this.age} years old.
      He likes ${this.interests[0]} and ${this.interests[1]}.
      His favourite movie is ${this.movies[0].name}, released in ${this.movies[0].date}.`);
  },
  greeting() {
    alert(`Hi I'm ${this.name[0]}.`);
  }
};

// Here we are effectively creating a sub-namespace.
// person.name.first
// person.name.last

// members can also be their own arrays with their own object and members
// movies: [{ name: 'The Godfather', date: 1972 }, { name: 'Pulp Fiction', date: 1993 }],
// person.movies[0].name
// person.movies[0].date


/* === BRACKET NOTATION === */
// There is another way to access object properties — using bracket notation.
// Instead of using these:

// person.age
// person.name.first

// person['age']
// person['name']['first']

/* === SETTING OBJECT MEMBERS === */
// So far we've only looked at retrieving (or getting) object members
// — you can also set (update) the value of object members by declaring the member you want to set
// (using dot or bracket notation)

// person.age = 45;
// person['name']['last'] = 'Ross';

// Setting members doesn't just stop at updating the values of existing properties and methods;
// you can also create completely new members.
// Try these in the JS console:

// person['eyes'] = 'hazel';
// person.farewell = function() { alert("Bye everybody!"); }

// person['eyes']
// person.farewell()
