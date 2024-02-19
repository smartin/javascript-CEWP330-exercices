// Declare variables first
const myOverlay = document.querySelector('#overlay');
const myMultiply = document.querySelector('#multiply');
const myScreen = document.querySelector('#screen');
const myNone = document.querySelector('#none');
let count = 0;
const displayCounter = document.querySelector('#counter');
const myBtn = document.querySelector('#changer');
const myText = document.querySelector('#whiteStar');


// Functions
myOverlay.onclick = function() {
  whiteStar.style.mixBlendMode = 'overlay';
  blackStar.style.mixBlendMode = 'overlay';
  blueStar.style.mixBlendMode = 'overlay';
  yellowStar.style.mixBlendMode = 'overlay';
  redStar.style.mixBlendMode = 'overlay';
  count++;
  displayCounter.textContent = `Number of blend mode changes: ${count}`;
  console.log(count);
};

myMultiply.onclick = function() {
  whiteStar.style.mixBlendMode = 'multiply';
  blackStar.style.mixBlendMode = 'multiply';
  blueStar.style.mixBlendMode = 'multiply';
  yellowStar.style.mixBlendMode = 'multiply';
  redStar.style.mixBlendMode = 'multiply';
  count++;
  displayCounter.textContent = `Number of blend mode changes: ${count}`;
};

myScreen.onclick = function() {
  whiteStar.style.mixBlendMode = 'screen';
  blackStar.style.mixBlendMode = 'screen';
  blueStar.style.mixBlendMode = 'screen';
  yellowStar.style.mixBlendMode = 'screen';
  redStar.style.mixBlendMode = 'screen';
  count++;
  displayCounter.textContent = `Number of blend mode changes: ${count}`;
};

myNone.onclick = function() {
  whiteStar.style.mixBlendMode = 'normal';
  blackStar.style.mixBlendMode = 'normal';
  blueStar.style.mixBlendMode = 'normal';
  yellowStar.style.mixBlendMode = 'normal';
  redStar.style.mixBlendMode = 'normal';
  count++;
  displayCounter.textContent = `Number of blend mode changes: ${count}`;
};

myText.textContent = '★';

myBtn.onclick = function() {
myText.textContent = '⬤';
}
