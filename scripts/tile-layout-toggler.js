'use strict';

let tileSetButton = document.querySelector('.tile--set');

tileSetButton.addEventListener('click', function () {
    previewList.classList.toggle('preview__list--tile-layout');
});