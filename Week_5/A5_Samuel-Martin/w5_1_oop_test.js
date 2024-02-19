const display = document.querySelector('#displayBio');


function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert(`Hi! I'm ${this.name}.`);
  };
}


function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;

  this.bio = function() {
// Assign a gendered Pronoun depending on the person's chosen gender.
    let gendPronoun = '';
    if (this.gender == 'male') {
      this.gendPronoun = 'He';
    } else if (this.gender == 'female') {
      this.gendPronoun = 'She';
    } else {
      this.gendPronoun = 'They';
    }

// Structure sentence to list interests nicely.
// for (let i = 0; i < interests.length; i++) {
//   if (i === interests.length - 1) {
//     biography += `and ${interests[i]}.`;
//   } else {
//     biography += `${interests[i]}, `;
//   }
// }

      alert(`${this.name.first} ${this.name.last} is ${this.age} years old.
        ${this.gendPronoun} likes ${this.interests[0]} and ${this.interests[1]}.`);
  };

  this.greeting = function() {
    alert(`Hi! I'm ${this.name.first}.`);
  };
}

//Display bio on page


const person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
const person2 = new Person('Cathy', 'Bennet', 48, 'female', ['diving']);
const person3 = new Person('Pat', 'LaVerde', 32, 'lgbtq2s', ['surfing', 'martial arts', 'pottery']);

console.log(person3.bio());
console.log(person2.bio());
console.log(person1.bio());
