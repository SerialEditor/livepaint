'use strict';

function getTranslateRate(node) {
    let clientWidth = node.clientWidth;
    let translateRate = Math.floor(clientWidth / 160) * 160;
    return translateRate;
}

function getTranslateBreakWidth(node, current) {
    return node.scrollWidth - Math.abs(current) - node.clientWidth;
}

let translateRate = getTranslateRate(previewList);
let currentTranslateWidth = 0;
let translateBreakWidth = getTranslateBreakWidth(previewList, currentTranslateWidth);

function translateForward() {
    if (translateBreakWidth <= 0) return;
        currentTranslateWidth -= translateRate;
        previewList.style.transform = `translateX(${currentTranslateWidth}px)`;
        translateBreakWidth = getTranslateBreakWidth(previewList, currentTranslateWidth);
}

function translateBack() {
    if (!currentTranslateWidth) return;
        currentTranslateWidth += translateRate;
        previewList.style.transform = `translateX(${currentTranslateWidth}px)`;
        translateBreakWidth = getTranslateBreakWidth(previewList, currentTranslateWidth);
}

previewList.addEventListener('wheel', function (evt) {
    if (previewList.classList.contains('column--layout')) return;
    evt.preventDefault();
    if (evt.deltaY > 0) {
        translateForward();
    } else {
        translateBack();
    }
});

let x = null;
previewList.addEventListener('touchstart', function(evt)  {
    x = evt.touches[0].clientX;
});
previewList.addEventListener('touchmove', function (evt) {
    if (!x || previewList.classList.contains('column--layout')) return;
    if (x - evt.touches[0].clientX > 0) {
        translateForward();
    } else {
        translateBack();
    }
    x = null;
});

function setTranslateInitState() {
    translateRate = getTranslateRate(previewList);
    currentTranslateWidth = 0;
    translateBreakWidth = getTranslateBreakWidth(previewList, currentTranslateWidth);
    previewList.style.transform = `translateX(0)`;
}

window.addEventListener('resize', function () {
    setTranslateInitState();
});