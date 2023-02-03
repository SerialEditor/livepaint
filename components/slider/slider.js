'use strict';

let sliderOpenButton = document.querySelector('.slider--set');
let sliderMask = document.querySelector('.slider-mask');
let slider = document.querySelector('.slider');
let sliderWindow = slider.querySelector('.slider__viewier-window');
let sliderImage = document.querySelector('.slider__image');
let slideTitle = slider.querySelector('.slide-title');
let sliderButtonBar = slider.querySelector('.slider__button-bar');
let buttonBack = slider.querySelector('.button--back');
let buttonForward = slider.querySelector('.button--forward');
let sliderClose = slider.querySelector('.slider--close');
let slideCounter = 0;

function openSlider() {
    sliderMask.hidden = false;
    slider.hidden = false;
    rootElement.classList.add('overflow--hidden');
}

function changeSlide(elem, src) {
    sliderWindow.classList.add('full--transparent');
    slideTitle.textContent = src.dataset.fileTitle;
    elem.src = src.href;
    elem.onload = function () {
        setTimeout(() => { sliderWindow.classList.remove('full--transparent') }, 250);
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
    if (buttonForward.hasAttribute('disabled')) {
        setButtonAbility(buttonForward, false);
    }
    if (slideCounter) {
        slideCounter = 0;
    }
}

sliderOpenButton.addEventListener('click', function () {
    openSlider();
});

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

sliderClose.addEventListener('click', function () {
    closeSlider();
});

document.addEventListener('keydown', function (evt) {
    if (!slider.hasAttribute('hidden') && evt.code === 'Escape') {
        closeSlider();
    }
});