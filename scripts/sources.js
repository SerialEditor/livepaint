'use strict';

let rootElement = document.documentElement;

let previewList = document.querySelector('.preview__list');
let previewItems = previewList.querySelectorAll('.preview__item');
let previewMagnifyingButtons = previewList.querySelectorAll('.magnifying-button');
let sliderImage = document.querySelector('.slider__image');

function getSlideSources (sources) {   //Чтобы слайдер крутил только отфильтрованные категории
    let slidesArray = [];
    sources.forEach(function (source) {
        if (!source.parentElement.classList.contains('full--hidden')) {
            slidesArray.push(source);
        }
    });
    return slidesArray; 
}

let slideSources = getSlideSources(previewMagnifyingButtons);




