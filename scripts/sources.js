'use strict';

let rootElement = document.documentElement;

let previewList = document.querySelector('.preview__thumbnails-list');
let previewItems = previewList.querySelectorAll('.preview__thumbnails-item');
let previewMagnifyingButtons = previewList.querySelectorAll('.magnifying-button');

function getDisplayItems (items) {
    let displayItemsArray = [];
    items.forEach(function (item) {
        if (!item.classList.contains('full--hidden') && !item.parentElement.classList.contains('full--hidden')) {
            displayItemsArray.push(item);
        }
    });
    return displayItemsArray;
}

function setButtonAbility(button, boolean) {
    button.disabled = boolean;
}

let displayPreviews = getDisplayItems(previewItems);
let slideSources = getDisplayItems(previewMagnifyingButtons);

document.addEventListener('DOMContentLoaded', function () {
    previewMagnifyingButtons[0].classList.add('animated--tooltip');
});

previewMagnifyingButtons[0].addEventListener('animationend', function (evt) {
    evt.target.classList.remove('animated--tooltip');
});




