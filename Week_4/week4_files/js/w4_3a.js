const closer = document.querySelectorAll('.remove');
let numItems = closer.length;
console.log(numItems);

closer.forEach(function(btn) {
  console.log(btn.textContent);
  btn.addEventListener('click', function() {
    this.style.display = 'none';
    numItems--;
    if (numItems === 0) {
      document.querySelector('#message').textContent = 'all gone!!!';
    }
  });
});
