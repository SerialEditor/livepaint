'use strict';

let userActions = previewList.querySelectorAll('.preview__user-actions-menu');
let enlargedImageLinks = previewList.querySelectorAll('.enlarged-image');
let userActionsTogglers = previewList.querySelectorAll('.preview__user-actions-menu-toggler');
let activeUserActionsToggler = null;
let activeUserActions = null;
let touchedPreviewItem = null;

function  resetActiveNodes () {
        if (!activeUserActions.classList.contains('full--hidden')) {
            activeUserActions.classList.add('full--hidden');
        }
        if (activeUserActionsToggler.classList.contains('visualised')) {
            activeUserActionsToggler.classList.remove('visualised');
        }
        activeUserActions = null;
        activeUserActionsToggler = null;
}

for (let i = 0; i < userActions.length; i++) {
    userActionsTogglers[i].addEventListener('click', function () {
        if (activeUserActionsToggler && activeUserActionsToggler !== userActionsTogglers[i]) {
            resetActiveNodes();
        }
        if (!activeUserActionsToggler) {
            activeUserActionsToggler = userActionsTogglers[i];
            activeUserActions = userActions[i];
        }
        userActions[i].classList.toggle('full--hidden');
        userActionsTogglers[i].classList.toggle('visualised');
    });
    enlargedImageLinks[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        sliderImage.src = enlargedImageLinks[i].href;
        sliderButtonBar.classList.add('full--hidden');
        openSlider();
    });
}

for (let i = 0; i < previewItems.length; i++) {
    previewItems[i].addEventListener('touchstart', function () {
        if (!touchedPreviewItem) {
            touchedPreviewItem = previewItems[i];
        }
        if (touchedPreviewItem && touchedPreviewItem !== previewItems[i]) {
            touchedPreviewItem.classList.remove('touch--visualised');
            touchedPreviewItem = previewItems[i];
        }
        if (!touchedPreviewItem.classList.contains('touch--visualised')) {
            touchedPreviewItem.classList.add('touch--visualised');
        }
    });
}

document.addEventListener('click', function (evt) {
    if (activeUserActionsToggler && !evt.target.closest('.preview__user-actions-menu-toggler') && !evt.target.closest('.preview__user-actions-menu')) {
        resetActiveNodes();
    }
});

document.addEventListener('touchstart', function (evt) {
    if (touchedPreviewItem && !evt.target.closest('.preview__item')) {
        touchedPreviewItem.classList.remove('touch--visualised');
        touchedPreviewItem = null;
    } 
});
