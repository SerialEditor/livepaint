'use strict';

let navListToggler = document.querySelector('.navigation__list--toggler');
let navList = document.querySelector('.navigation__list');

navListToggler.addEventListener('click', function () {
    navList.classList.toggle('navigation__list--showed');
    navListToggler.classList.toggle('toggler--on');
});
