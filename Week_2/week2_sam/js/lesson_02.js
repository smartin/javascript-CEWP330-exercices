// Declare variables first
const myOpen = document.querySelector('#openMenu');
const myClose = document.querySelector('#closeMenu');
const navMenu = document.querySelector('#myNav');

myOpen.onclick = function () {
  navMenu.style.width = '33%';
};

myClose.onclick = function () {
  navMenu.style.width = '0%';
}
