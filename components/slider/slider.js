'use strict';

let sliderOpenButton = document.querySelector('.slider--set');
let sliderMask = document.querySelector('.slider-mask');
let slider = document.querySelector('.slider');
let sliderWindow = slider.querySelector('.slider__viewier-window');
export let sliderImage = slider.querySelector('.slider__image');
let buttonBack = slider.querySelector('.button--back');
let buttonForward = slider.querySelector('.button--forward');
let sliderClose = slider.querySelector('.slider--close');

let slideCounter = 0;

buttonBack.disabled = true;

//Open/close slider
sliderOpenButton.addEventListener('click', function () { 
    // sliderImage.src = slideSources[0];
    sliderMask.removeAttribute('hidden');
    slider.removeAttribute('hidden');
    rootElement.classList.add('slider-mask--overflow-hidden');
});

function closeSlider() {
    sliderMask.setAttribute('hidden', true);
    slider.setAttribute('hidden', true);
    rootElement.classList.remove('slider-mask--overflow-hidden');
    sliderImage.src = slideSources[0];
    if (!buttonBack.classList.contains('button--disabled')) {
        setButtonAbility(buttonBack, true); //Line 55
    }
    if (buttonForward.classList.contains('button--disabled')) {
        setButtonAbility(buttonForward, false);
    }
    slideCounter = 0;
}

sliderClose.addEventListener('click', function () {
    closeSlider();
});

document.addEventListener('keydown', function (evt) {
    if (evt.code === 'Escape') {
        closeSlider();
    }
})

//Change slides
function changeSlide(elem, src) {
    sliderWindow.classList.add('full-transparency');
    elem.src = src;
    elem.onload = function () {
        setTimeout(() => {sliderWindow.classList.remove('full-transparency')}, 250);
    }
}

function setButtonAbility(button, boolean) {
    button.disabled = boolean;
    if (boolean) {
        button.classList.add('button--disabled');
    } else { button.classList.remove('button--disabled'); }
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