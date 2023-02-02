'use strict';

let filterCategories = document.querySelector('.filter-categories');
let currentCategory = filterCategories.querySelector('.current-category');
let categoryButtons = filterCategories.querySelectorAll('.filter-category-button');

for (let categoryButton of categoryButtons) {
    categoryButton.addEventListener('click', function () {
        if (categoryButton.textContent === currentCategory.textContent) {
            filterCategories.removeAttribute('open');
            return;
        }
        currentCategory.textContent = categoryButton.textContent;
        for (let item of previewItems) {
            if (item.dataset.category !== categoryButton.dataset.category && categoryButton.dataset.category !== 'all') {
                item.classList.add('full--hidden');
            } else {item.classList.remove('full--hidden');}
        }
        slideSources = getSlideSources(previewMagnifyingButtons);
        slideTitle.textContent = slideSources[0].dataset.fileTitle;
        sliderImage.src = slideSources[0].href;
        filterCategories.removeAttribute('open'); 
    });
}

document.addEventListener('click', function (evt) {
    if (!evt.target.closest('.filter-categories') && filterCategories.hasAttribute('open')) {
        filterCategories.removeAttribute('open');
    }
});