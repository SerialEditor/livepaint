'use strict';

let layoutSetButton = document.querySelector('.layout--set');

layoutSetButton.addEventListener('click', function () {
    previewList.classList.toggle('preview__list--tile-layout');
    if (previewList.classList.contains('preview__list--tile-layout')) {
        layoutSetButton.setAttribute('style', '--set-opacity: 1;');
    } else {layoutSetButton.removeAttribute('style');}
});