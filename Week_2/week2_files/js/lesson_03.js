/*eslint no-undef: "error"*/
/*eslint-env browser*/

let points = 0;
const displayPoints = document.querySelector('#display');
const incPoints = document.querySelector('#day');
const decPoints = document.querySelector('#night');

incPoints.onclick = function () {
  points += 10;
  // displayPoints.textContent = 'total points: ' + points + '!';
  // old method for concatenating strings
  displayPoints.textContent = `total points: ${points}!`;
};

decPoints.onclick = function () {
  points -= 10;
  displayPoints.textContent = `total points: ${points}!`;
};
