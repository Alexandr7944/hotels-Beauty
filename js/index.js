const burgerBtn = document.querySelector('.burger__btn');
const menu = document.querySelector('.menu-mobile');

burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('none');
  burgerBtn.classList.toggle('close');
})