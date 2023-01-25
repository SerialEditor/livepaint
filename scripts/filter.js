'use strict';

let filterCategories = document.querySelector('.filter-categories');
let currentCategory = filterCategories.querySelector('.current-category');
let categoryButtons = filterCategories.querySelectorAll('.preview-category-button');

for (let categoryButton of categoryButtons) {
    categoryButton.addEventListener('click', function () {
        currentCategory.textContent = categoryButton.textContent;
        for (let preview of previews) {
            if (preview.dataset.category !== categoryButton.dataset.category && categoryButton.dataset.category !== 'all') {
                preview.parentElement.classList.add('full-hidden');
            } else {preview.parentElement.classList.remove('full-hidden');}
        }
        slideSources = getAvailableSlideSources([...previews]);
        filterCategories.removeAttribute('open'); 
    });
}