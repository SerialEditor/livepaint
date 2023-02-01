'use strict';

let magnifyingButtons = previewList.querySelectorAll('.magnifying-button');
let touchedPreviewItem = null;

for (let button of magnifyingButtons) {
    button.addEventListener('click', function (evt) {
        evt.preventDefault();
        sliderButtonBar.classList.add('full--hidden');
        sliderImage.removeAttribute('src');
        openSlider();
        changeSlide(sliderImage, button.href); 
    });
}

for (let item of previewItems) {
    item.addEventListener('touchstart', function () {
        if (!touchedPreviewItem) {
            touchedPreviewItem = item;
        }
        if (touchedPreviewItem && touchedPreviewItem !== item) {
            touchedPreviewItem.classList.remove('touch--visualised');
            touchedPreviewItem = item;
        }
        if (!touchedPreviewItem.classList.contains('touch--visualised')) {
            touchedPreviewItem.classList.add('touch--visualised');
        }
    });
}

document.addEventListener('touchstart', function (evt) {
    if (touchedPreviewItem && !evt.target.closest('.preview__item')) {
        touchedPreviewItem.classList.remove('touch--visualised');
        touchedPreviewItem = null;
    } 
});
