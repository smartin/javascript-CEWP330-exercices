// Click buttons to add the text content of buttons to the page.
const cities = ['Zihuatanejo', 'Yellowknife'];
const cityDisplay = document.querySelector('#display');
const btnClass = document.querySelectorAll('.city');;


cityDisplay.textContent = cities.join(', ');
console.log(cities);

const addCity = document.querySelectorAll('.city');

addCity.forEach((btnClass) => {
  btnClass.addEventListener('click', function(){
    const myTxt = this.textContent;
    console.log(myTxt);
    cities.push(myTxt);
    display.textContent = cities.join(', ');
    this.style.color = '#aaaaaa';
    this.disabled = true;
  });
});
