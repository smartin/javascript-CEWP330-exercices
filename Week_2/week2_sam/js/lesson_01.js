/*eslint no-undef: "error"*/
/*eslint-env browser*/

// alert('hello world');

// let userName = 'Peter';
// console.log(userName);
// userName = 'Bob';
// // console.log(userName);
// // console.log('User name should have changed here.');
//
// let userAge = 99;  // number variable
// let myBoolean = true;
// let myArray = [99, 'Jenny', 'Steve', 102]
//
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[3]);

let myTxt = document.querySelector('#display');
console.log(myTxt);
myTxt.textContent = 'Yo-ho-ho and a bottle of rhum!'
console.log(myTxt);

const message = 'here\'s a new message';
//myTxt.textContent = message;
console.log(message);

const myBtn = document.querySelector('#changer');
console.log(myBtn);
myBtn.onCLick = function () {
myTxt.textContent = message;
};
