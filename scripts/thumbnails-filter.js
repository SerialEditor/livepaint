'use strict';

let filterCategories = document.querySelector('.filter-categories');
let summaryCategory = filterCategories.querySelector('.filter-categories__summary');
let categoryButtons = filterCategories.querySelectorAll('.filter-categories__button');
let currentCategory = filterCategories.querySelector('.current--category');

for (let categoryButton of categoryButtons) {
    categoryButton.addEventListener('click', function () {
        if (categoryButton.textContent === currentCategory.textContent) {
            filterCategories.removeAttribute('open');
            return;
        }
        currentCategory.classList.remove('current--category');
        currentCategory = categoryButton;
        currentCategory.classList.add('current--category');
        summaryCategory.textContent = currentCategory.textContent;
        for (let item of previewItems) {
            if (item.dataset.category !== currentCategory.dataset.category && currentCategory.dataset.category !== 'all') {
                item.classList.add('full--hidden');
            } else { item.classList.remove('full--hidden'); }
        }
        setTranslateInitState();
        slideSources = getDisplayItems(previewMagnifyingButtons);
        slideTitle.textContent = slideSources[0].dataset.fileTitle;
        sliderImage.src = slideSources[0].href;
        setTimeout(function () { filterCategories.removeAttribute('open'); }, 500);
    });
}

document.addEventListener('click', function (evt) {
    if (!evt.target.closest('.filter-categories') && filterCategories.hasAttribute('open')) {
        filterCategories.removeAttribute('open');
    }
});