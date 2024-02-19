const myData = ['Montreal','Toronto','Ottawa','Calgary','Edmonton','Vancouver'];
const firstPos = myData[0];
console.log(`Welcome to ${firstPos}!`);
const secondPos = myData[1];
console.log(`Nope, you're thinking about ${secondPos}!`);
console.log(`There are ${myData.length} cities in the array.`);

document.querySelector('#display').textContent = myData;

document.querySelector('#display1').textContent = myData.join(', ');

document.querySelector('#display2').textContent = myData.length;

myData.push('Singapore');
document.querySelector('#display5').textContent = myData.join(', ');

myData.pop();
document.querySelector('#display6').textContent = myData.join(', ');

myData.shift();
document.querySelector('#display7').textContent = myData.join(', ');

myData.unshift('Lima');
document.querySelector('#display8').textContent = myData.join(', ');

document.querySelector('#display9').innerHTML = `Original Array:<br>${myData.join(', ')}`;

const addBtn = document.querySelector('#spliceBtn');
addBtn.addEventListener('click', mySplicer);

function mySplicer(){
  myData.splice(2, 0, 'Sydney', 'Perth');
document.querySelector('#display10').innerHTML = `The new array:<br>${myData.join(', ')}`;
};

let slcCities = myData.slice(1);
document.querySelector('#display11').innerHTML = `${myData.join(', ')}<br>${slcCities}`;


slcCities = myData.slice(1,3);
document.querySelector('#display12').innerHTML = `${myData}<br>${slcCities}`;
console.log(myData[1]);

document.querySelector('#display13').textContent = myData.join(', ');
