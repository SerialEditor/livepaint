'use strict';

let rootElement = document.documentElement;

let previewList = document.querySelector('.preview__list');
let previews = previewList.querySelectorAll('.preview__image');
let sliderImage = document.querySelector('.slider__image');

function getInitSlideSourcePath(initSlide) {
    let splitSource = initSlide.attributes.src.textContent.split('/');
    let selectedPath = splitSource.slice([0], [splitSource.length - 1]);
    if (selectedPath.length > 1) {
        return selectedPath.join('/') + '/';
    } return selectedPath + '/';
}

function getSlideInitSources(initPath) {
    let initSlideSources = [...previews].map(function (preview) {
        let splitSource = preview.attributes.src.textContent.split('/');
        let previewName = splitSource[splitSource.length - 1];
        return initPath + previewName;
    });
    return initSlideSources;
}

const initSlideSourcePath = getInitSlideSourcePath(sliderImage);
let slideSources = getSlideInitSources(initSlideSourcePath);


