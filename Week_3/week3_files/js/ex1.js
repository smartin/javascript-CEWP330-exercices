let name = document.querySelector('#myText').value;
const displaymsg = document.querySelector('#display');

const checker = document.querySelector('#checkBtn');
checker.onclick = function() {
  myPassFunction();
};


function myPassFunction() {
  name = document.querySelector('#myText').value;
  console.log(name);
  if (name === 'Santo') {
    displaymsg.textContent = `welcome ${name}`;
    // same as displaymsg.textContent = 'welcome ' + name;
  } else if (name === 'Jlo') {
    displaymsg.textContent = `welcome ${name}`;
  } else {
    displaymsg.textContent = `get lost  ${name}, who invited you?`;
  }

}
