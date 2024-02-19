let name = document.querySelector('#myText').value;
const displaymsg = document.querySelector('#display');

const checker = document.querySelector('#checkBtn');
checker.onclick = function() {
  myPassFunction();
};

function myPassFunction() {
  name = document.querySelector('#myText').value;
  console.log(name);
  if (name === 'Ghandi') {
    displaymsg.textContent = `Welcome, Mr. ${name}! Bubbly and oysters are in the cooler out back.`;
  } else if (name === 'Buddha') {
    displaymsg.textContent = `Mr. ${name}! Oh dear! we're'expecting Mr. Ghandi tonight. It seems your reservation is for tomorrow.`;
  } else {
    displaymsg.textContent = `So sorry ${name}, I've been instructed let only people named Ghandi in.`;
  }
}
