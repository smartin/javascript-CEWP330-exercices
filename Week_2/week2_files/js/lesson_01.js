/*eslint no-undef: "error"*/
/*eslint-env browser*/

// alert('testing');
const myText = document.querySelector('#display');
myText.textContent = 'hello world';
console.log(myText);

let message = 'some new text';
console.log(message);
message = 'a new message';

const myBtn = document.querySelector('#changer');
// let's add an event to the btn
myBtn.onclick = function () {
  myText.textContent = message;
};
