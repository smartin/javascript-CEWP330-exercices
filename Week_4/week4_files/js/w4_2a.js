// lets serve up some customers
const customers = 10;
const paraCust = document.querySelector('#displayCustomers');
const showCustBtn = document.querySelector('#customerBtn');

showCustBtn.addEventListener('click', customerFunction);

function customerFunction(){
  paraCust.innerHTML = '';
  //cleared the display field so we don't get the same message repeated
  for (let i = 1; i <= customers; i++) {
    // console.log(`Now serving number: ${i + 1}`);
    // paraCust.innerHTML += `Now serving customer: ${i + 1} <br>`;
    paraCust.innerHTML += `Now serving customer: ${i} <br>`;
  }
}
