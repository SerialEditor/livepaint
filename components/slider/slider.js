'use strict';

let sliderViewierContainer = slider.querySelector('.slider__viewier-container');
let sliderImage = document.querySelector('.slider__image');
let slideTitle = slider.querySelector('.slider__slide-title');
let sliderButtonBar = slider.querySelector('.slider__button-bar');
let buttonBack = slider.querySelector('.button--back');
let buttonForward = slider.querySelector('.button--forward');
let sliderButtonClose = slider.querySelector('.slider__close-button');
let slideCounter = 0;

function changeSlide(elem, src) {
    sliderViewierContainer.classList.add('full--transparent');
    slideTitle.textContent = src.dataset.fileTitle;
    elem.src = src.href;
    elem.onload = function () {
        setTimeout(() => { sliderViewierContainer.classList.remove('full--transparent') }, 250);
    }
}

function closeSlider() {
    sliderMask.hidden = true;
    slider.hidden = true;
    rootElement.classList.remove('overflow--hidden');
    if (sliderImage.src !== slideSources[0].href) {
        sliderImage.src = slideSources[0].href;
        slideTitle.textContent = slideSources[0].dataset.fileTitle;
    }
    if (sliderButtonBar.classList.contains('full--hidden')) {
        sliderButtonBar.classList.remove('full--hidden');
    }
    if (!buttonBack.hasAttribute('disabled')) {
        setButtonAbility(buttonBack, true);
    }
    if (!buttonForward.hasAttribute('disabled')) {
        setButtonAbility(buttonForward, true);
    }
    if (slideCounter) {
        slideCounter = 0;
    }
}

buttonBack.addEventListener('click', function () {
    if (slideCounter === (slideSources.length - 1)) {
        setButtonAbility(buttonForward, false);
        slideCounter--;
    } else if (slideCounter > 0) {
        slideCounter--;
    }
    changeSlide(sliderImage, slideSources[slideCounter]);
    if (slideCounter === 0) {
        setButtonAbility(buttonBack, true);
        return;
    }
});

buttonForward.addEventListener('click', function () {
    if (slideCounter === 0) {
        setButtonAbility(buttonBack, false);
        slideCounter++;
    } else if (slideCounter < (slideSources.length - 1)) {
        slideCounter++;
    }
    changeSlide(sliderImage, slideSources[slideCounter]);
    if (slideCounter === (slideSources.length - 1)) {
        setButtonAbility(buttonForward, true);
        return;
    }
});

sliderButtonClose.addEventListener('click', function () {
    closeSlider();
});

document.addEventListener('keydown', function (evt) {
    if (!slider.hasAttribute('hidden') && evt.code === 'Escape') {
        closeSlider();
    }
});