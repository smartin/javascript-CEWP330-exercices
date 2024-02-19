const displayMsg = document.querySelector('#display');
const convert = document.querySelector('#converter');


convert.onclick = function() {
  let numberF = document.querySelector('#temp').value;
  console.log(numberF);
  displayMsg.textContent = `The temperature is ${toCelsius(numberF)} Celsius`;
};

function toCelsius(farenheit) {
  return (5 / 9) * (farenheit - 32);
}






const displaymsg2 = document.querySelector('#display2');
const convert2 = document.querySelector('#converter2');

convert2.onclick = function() {
  let numberC = document.querySelector('#temp2').value;
  displaymsg2.textContent = `The temperature is ${financial(toFarenheit(numberC))} Farenheit`;
  console.log(numberC);
};

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

function toFarenheit(celsius) {
  return Math.round((celsius * (9 / 5)) + 32);
}
