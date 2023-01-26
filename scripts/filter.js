'use strict';

let filterCategories = document.querySelector('.filter-categories');
let currentCategory = filterCategories.querySelector('.current-category');
let categoryButtons = filterCategories.querySelectorAll('.preview-category-button');

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

for (let categoryButton of categoryButtons) {
    categoryButton.addEventListener('click', function () {
        currentCategory.textContent = categoryButton.textContent;
        for (let preview of previews) {
            if (preview.dataset.category !== categoryButton.dataset.category && categoryButton.dataset.category !== 'all') {
                preview.parentElement.classList.add('full-hidden');
            } else {preview.parentElement.classList.remove('full-hidden');}
        }
        slideSources = getAvailableSlideSources([...previews]);
        sliderImage.src = slideSources[0];
        filterCategories.removeAttribute('open'); 
    });
}