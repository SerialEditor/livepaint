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
    if (touchedPreviewItem && !evt.target.closest('.preview__thumbnails-item')) {
        touchedPreviewItem.classList.remove('touch--visualised');
        touchedPreviewItem = null;
    } 
});
