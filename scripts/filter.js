'use strict';

let filterCategories = document.querySelector('.filter-categories');
let summaryCategory = filterCategories.querySelector('.filter-categories__summary');
let categoryButtons = filterCategories.querySelectorAll('.filter-categories__button');

for (let categoryButton of categoryButtons) {
    categoryButton.addEventListener('click', function () {
        if (categoryButton.textContent === summaryCategory.textContent) {
            filterCategories.removeAttribute('open');
            return;
        }
        summaryCategory.textContent = categoryButton.textContent;
        for (let item of previewItems) {
            if (item.dataset.category !== categoryButton.dataset.category && categoryButton.dataset.category !== 'all') {
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