const txt =  document.querySelector('#display');
const b1 =  document.querySelector('#btn1');
const b2 =  document.querySelector('#btn2');

// b1.onclick = function(){
//   txt.textContent = 'Hello World!!'
// };
//
// b2.onclick = function(){
//   txt.textContent = 'Bye Bye Thanks!'
// };

// txt.textContent = b1.textContent;

function changeTxt(){
  txt.textContent = this.textContent;
};

b1.addEventListener('click', changeTxt);
b2.addEventListener('click', changeTxt);
