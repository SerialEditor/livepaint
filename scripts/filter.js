'use strict';

let filterCategories = document.querySelector('.filter-categories');
let summaryCategory = filterCategories.querySelector('.filter-categories__summary');
let categoryButtons = filterCategories.querySelectorAll('.filter-categories__button');
let currentCategory = filterCategories.querySelector('.current--category');
let isSelectedFilter;

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
        displayPreviews = getDisplayItems(previewItems);
        if (!previewList.classList.contains('column--layout')) {
            setInitState = getInitStateSetter(previewList, displayPreviews);
            setInitState();
            isSelectedFilter = false;
        } else {
            isSelectedFilter = true;
        }
        slideSources = getDisplayItems(previewMagnifyingButtons);
        slideTitle.textContent = slideSources[0].dataset.fileTitle;
        sliderImage.src = slideSources[0].href;
        currentCategory.classList.remove('current--category');
        currentCategory = categoryButton.parentElement;
        currentCategory.classList.add('current--category');
        setTimeout(function () {filterCategories.removeAttribute('open');}, 400);
        previewList.scrollTo(0, 0);
    });
}

document.addEventListener('click', function (evt) {
    if (!evt.target.closest('.filter-categories') && filterCategories.hasAttribute('open')) {
        filterCategories.removeAttribute('open');
    }
});