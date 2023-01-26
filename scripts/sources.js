'use strict';

let rootElement = document.documentElement;

let previewList = document.querySelector('.preview__list');
let previews = previewList.querySelectorAll('.preview__image');
let sliderImage = document.querySelector('.slider__image');

function getInitSlideSource(initSlide) {
    let splitSliderImageSource = initSlide.attributes.src.textContent.split('/');
    let conjointSliderImageWay = splitSliderImageSource.slice([0], [splitSliderImageSource.length - 1]).join('/');
    return conjointSliderImageWay;
}

function getSlideInitSources(initSlideSource) {
    let initSlideSources = [...previews].map(function (preview) {
        let splitPreviewSource = preview.attributes.src.textContent.split('/');
        let previewName = splitPreviewSource[splitPreviewSource.length - 1];
        return initSlideSource + '/' + previewName;
    });
    return initSlideSources;
}

const initSlideSource = getInitSlideSource(sliderImage);
let slideSources = getSlideInitSources(initSlideSource);


