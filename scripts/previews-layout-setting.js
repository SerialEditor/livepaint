'use strict';

let layoutSetButton = document.querySelector('.layout--set');
let layoutModeText = layoutSetButton.querySelector('.layout-mode');

layoutSetButton.addEventListener('click', function () {
    previewList.classList.toggle('column--layout');
    if (previewList.classList.contains('column--layout')) {
        layoutSetButton.setAttribute('style', '--set-before-opacity: 0; --set-after-opacity: 0;');
        setTimeout(function () {
            layoutSetButton.setAttribute('style', '--set-before-opacity: 0; --set-after-opacity: 1;');
        }, 250);
        layoutModeText.textContent = 'Выстроить в ряд';
    } else {
        layoutSetButton.setAttribute('style', '--set-before-opacity: 0; --set-after-opacity: 0;');
        setTimeout(function () {
            layoutSetButton.setAttribute('style', '--set-after-opacity: 0; --set-before-opacity: 1');
        }, 250);
        layoutModeText.textContent = 'Выстроить колонками';
    }
});