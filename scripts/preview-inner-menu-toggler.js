'use strict';

let userActionsMenu = previewList.querySelectorAll('.preview__user-actions-menu');
let userActionsMenuToggler = previewList.querySelectorAll('.preview__user-actions-menu-toggler');

for (let i = 0; i < userActionsMenu.length; i++) {
    userActionsMenuToggler[i].addEventListener('click', function () {
        userActionsMenu[i].classList.toggle('full--hidden');
        userActionsMenuToggler[i].classList.toggle('fixed');
    });
}