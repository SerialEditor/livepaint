'use strict';

let rootElement = document.documentElement;

let previewList = document.querySelector('.preview__list'); 
let previews = previewList.querySelectorAll('.preview__image'); 

function getAvailablePreviewsArray(previews) {
    let availablePreviewsArray = [];
    previews.forEach(function (preview) {
        if (!preview.parentElement.classList.contains('full-hidden')) {
            availablePreviewsArray.push(preview);
        }
    });
    return availablePreviewsArray;
}

function getAvailableSlideSources(previews) {
    let previewSources = getAvailablePreviewsArray(previews).map(function (preview) {
        return preview.src;
    });                                                            
    let availableSlideSources = previewSources.map(function (previewSource) {
        let slideSource = previewSource.replace('previews', 'slides');
        return slideSource;
    });
    return availableSlideSources;
}

let slideSources = getAvailableSlideSources([...previews]);

// let previewSources = getAvailablePreviewsArray([...previews]).map(function (preview) {
//     return preview.src;
// });                                                            //import
// let slideSources = previewSources.map(function (previewSource) {
//     let slideSource = previewSource.replace('previews', 'slides');
//     return slideSource;
// });