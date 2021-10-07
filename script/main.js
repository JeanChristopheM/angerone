let hamburger = document.querySelector('.header__hamburger');
let menu = document.querySelector('.header__mobile__menu');
let menuBurger = document.querySelector('.header__mobile__menu__heading__hamburger');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});


menuBurger.addEventListener('click', () => {
    menu.classList.remove('active');
});