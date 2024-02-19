const cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting() {
    console.log('Meow!');
  }
};

// Put your code here
const catName = cat.name;
cat.greeting();
cat.color = 'black';

// Don't edit the code below here
const section = document.querySelector('section');
const para1 = document.createElement('p');
const para2 = document.createElement('p');

para1.textContent = `The cat's name is ${catName}.`;
para2.textContent = `The cat's color is ${cat.color}.`;

section.appendChild(para1);
section.appendChild(para2);
