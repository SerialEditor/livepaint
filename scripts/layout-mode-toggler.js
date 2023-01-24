'use strict';

let layoutSetButton = document.querySelector('.layout--set');
let layoutModeText = layoutSetButton.querySelector('.layout-mode');

layoutSetButton.addEventListener('click', function () {
    previewList.classList.toggle('preview__list--tile-layout');
    if (previewList.classList.contains('preview__list--tile-layout')) {
        layoutSetButton.setAttribute('style', '--set-opacity: 1;');
        layoutModeText.textContent = 'Плитка';
    } else {layoutSetButton.removeAttribute('style'); layoutModeText.textContent = 'Ряд';}
});