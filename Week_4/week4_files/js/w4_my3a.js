let display = document.querySelector('#message');
let remover = document.querySelectorAll('.remove');
let counter = remover.length;
console.log(counter);

remover.forEach((btn) => {
  btn.addEventListener('click', function(){
    this.style.visibility = 'hidden';
    counter --;
    if (counter === 0) {
      display.textContent = 'No more buttons!';
    }

  });

});
