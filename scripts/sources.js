'use strict';

let rootElement = document.documentElement;

let previewList = document.querySelector('.preview__thumbnails-list');
let previewItems = previewList.querySelectorAll('.preview__thumbnails-item');
let previewMagnifyingButtons = previewList.querySelectorAll('.magnifying-button');

function getSlideSources (sources) {   //Чтобы слайдер крутил только отфильтрованные категории
    let slidesArray = [];
    sources.forEach(function (source) {
        if (!source.parentElement.classList.contains('full--hidden')) {
            slidesArray.push(source);
        }
    });
    return slidesArray; 
}

function setButtonAbility(button, boolean) {
    button.disabled = boolean;
}

let slideSources = getSlideSources(previewMagnifyingButtons);
let previewListScrollWidth = previewList.scrollWidth;



