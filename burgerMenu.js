const burgerOpen = 'burger_open';
const burgerBtn = document.querySelector('.js-burger-btn');
const lines = document.querySelectorAll('.burger-menu');
const burgerNode = document.querySelector('.js-burger');

function toggleBurger() {
  lines.forEach((line) => line.classList.toggle('open'));
  burgerNode.classList.toggle('burger_open');

}


burgerBtn.addEventListener('click', toggleBurger);
