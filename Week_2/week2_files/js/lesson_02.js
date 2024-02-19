/*eslint no-undef: "error"*/
/*eslint-env browser*/
// alert('hello world');

const myOpen = document.querySelector('#openMenu');
const myClose = document.querySelector('#closeMenu');
const navMenu = document.querySelector('#myNav');

myOpen.onclick = function () {
  navMenu.style.width = '30%';
};

myClose.onclick = function () {
  navMenu.style.width = '0%';
};
