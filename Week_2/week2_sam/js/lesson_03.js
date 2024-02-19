let points = 0;
const displayPoints = document.querySelector('#display');
const incPoints = document.querySelector('#day');
const decPoints = document.querySelector('#night');

incPoints.onclick = function () {
  points += 10;
  displayPoints.textContent = `Total points: ${points}!`;
  console.log(points);
}

decPoints.onclick = function () {
  points -= 5;
  displayPoints.textContent = `Total points: ${points}!`;
  console.log(points);
}
