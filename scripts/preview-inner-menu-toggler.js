'use strict';

let userActionsMenu = previewList.querySelectorAll('.preview__user-actions-menu');
let userActionsMenuToggler = previewList.querySelectorAll('.preview__user-actions-menu-toggler');
let currentUserActionsMenu = null;
let currentUserActionsMenuToggler = null;

function  setCurrent (target) {
    if (target !== currentUserActionsMenu && target !== currentUserActionsMenuToggler) {
        if (!currentUserActionsMenu.classList.contains('full--hidden')) {
            currentUserActionsMenu.classList.add('full--hidden');
        }
        if (currentUserActionsMenuToggler.classList.contains('fixed')) {
            currentUserActionsMenuToggler.classList.remove('fixed');
        }
        currentUserActionsMenu = null;
        currentUserActionsMenuToggler = null;
    }
}

for (let i = 0; i < userActionsMenu.length; i++) {
    userActionsMenuToggler[i].addEventListener('click', function () {
        if (currentUserActionsMenu) {
            setCurrent(userActionsMenuToggler[i]);
        }
        if (currentUserActionsMenu !== userActionsMenu[i]) {
            currentUserActionsMenu = userActionsMenu[i];
        }
        if (currentUserActionsMenuToggler !== userActionsMenuToggler[i]) {
            currentUserActionsMenuToggler = userActionsMenuToggler[i];
        }
        userActionsMenu[i].classList.toggle('full--hidden');
        userActionsMenuToggler[i].classList.toggle('fixed');
    });
}

document.addEventListener('click', function (evt) {
    if (currentUserActionsMenu) {
        let target = evt.target;
        setCurrent(target);
    } 
});