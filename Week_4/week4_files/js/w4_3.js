//init the vars
let points = 0;
const showPoints = document.querySelector('#pointsdisplay');
const incPoints = document.querySelectorAll('.classy');
//querySelectorAll creates an array of elements with the same class
const numItems = incPoints.length;
//here we see how many elements there are by checking the arrays length
console.log(numItems);

incPoints.forEach(function(btn){
  btn.addEventListener('click', function(){
    this.style.background = 'crimson';
    this.disabled = true;
    points++;
    showPoints.textContent = `total points: ${points}`;
    pointChecker();
  });
});

function pointChecker() {
  if (points >= numItems) {
    showPoints.textContent = 'You clicked all the buttons!';
  }
}
