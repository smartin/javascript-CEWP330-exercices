const display = document.querySelector('#displayCustomers');
const cBtn = document.querySelector('#customerBtn');
const maxCustomers = 10

cBtn.addEventListener ('click', updateBtn);
 let i = 1;
function updateBtn() {
  display.innerHTML = '';

   // for (let i = 1; i <= maxCustomers; i++) {
   //   display.innerHTML += (`Now serving customer: ${i}<br>`)
   // }

   display.innerHTML += (`Now serving customer: ${i}<br>`);
     i++

}
