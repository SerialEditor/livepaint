'use strict';

let userActions = previewList.querySelectorAll('.preview__user-actions-menu');
let enlargedImageLinks = previewList.querySelectorAll('.enlarged-image');
let userActionsToggler = previewList.querySelectorAll('.preview__user-actions-menu-toggler');
let activeUserActionsToggler = null;
let activeUserActions = null;

function  resetActiveNode () {
        if (!activeUserActions.classList.contains('full--hidden')) {
            activeUserActions.classList.add('full--hidden');
        }
        if (activeUserActionsToggler.classList.contains('fixed')) {
            activeUserActionsToggler.classList.remove('fixed');
        }
        activeUserActions = null;
        activeUserActionsToggler = null;
}

for (let i = 0; i < userActions.length; i++) {
    userActionsToggler[i].addEventListener('click', function () {
        if (activeUserActionsToggler && activeUserActionsToggler !== userActionsToggler[i]) {
            resetActiveNode();
        }
        if (activeUserActionsToggler !== userActionsToggler[i]) {
            activeUserActionsToggler = userActionsToggler[i];
            activeUserActions = userActions[i];
        }
        userActions[i].classList.toggle('full--hidden');
        userActionsToggler[i].classList.toggle('fixed');
    });
    enlargedImageLinks[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        sliderImage.src = enlargedImageLinks[i].href;
        sliderButtonBar.classList.add('full--hidden');
        openSlider();
    });
}

document.addEventListener('click', function (evt) {
    if (activeUserActionsToggler && evt.target !== activeUserActionsToggler && evt.target !== activeUserActions) {
        resetActiveNode();
    } 
});