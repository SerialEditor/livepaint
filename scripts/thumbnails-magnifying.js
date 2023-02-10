'use strict';

let touchedPreviewItem = null;

for (let button of previewMagnifyingButtons) {
    button.addEventListener('click', function (evt) {
        evt.preventDefault();
        sliderButtonBar.classList.add('full--hidden');
        sliderImage.removeAttribute('src');
        openSlider();
        changeSlide(sliderImage, button); 
    });
}