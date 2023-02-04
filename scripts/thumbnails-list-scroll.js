let scrollForwardButton = document.querySelector('.thumbnails-scroll--forward');
let scrollBackButton = document.querySelector('.thumbnails-scroll--back');
let accumulatedScrollWidth = 0;
let hiddenWidth = getHiddenWidth(previewList.scrollWidth, previewList.clientWidth);

function getPreviewScrollabilitySetter(target) {
    let clientWidth = target.clientWidth;
    return function () {
        let scrollWidth = target.scrollWidth;
        if (scrollWidth === clientWidth && !scrollForwardButton.disabled) {
            setButtonAbility(scrollForwardButton, true);
        } else if (scrollWidth > clientWidth && scrollForwardButton.disabled) { 
            setButtonAbility(scrollForwardButton, false); 
        }
    };
}

function getHiddenWidth (scrollWidth, clientWidth) {
    let hiddenWidth = scrollWidth - (clientWidth + accumulatedScrollWidth);
    return hiddenWidth;
}

function getScrollNormalizer (target) {
    let scrollWidth = target.scrollWidth;
    let clientWidth = target.clientWidth;
    let scrollWidthNorm = (Math.trunc(clientWidth / 160)) * 160;
    return function () {
        accumulatedScrollWidth += scrollWidthNorm;
        hiddenWidth -= scrollWidthNorm;
        if (hiddenWidth < 80) {
            target.scrollTo(scrollWidth, 0);
            setTimeout(() => {setButtonAbility(scrollForwardButton, true);}, 500);
        } else {target.scrollBy(scrollWidthNorm, 0);}
    };
}

scrollForwardButton.addEventListener('click', function () {
    scrollPreviewList();
    if (accumulatedScrollWidth && scrollBackButton.hasAttribute('disabled')) {
        setButtonAbility(scrollBackButton, false);
    }
});

scrollBackButton.addEventListener('click', function () {
    previewList.scrollTo(0, 0);
    if (scrollForwardButton.hasAttribute('disabled')) {
        setButtonAbility(scrollForwardButton, false);
    }
    accumulatedScrollWidth = 0;
    hiddenWidth = getHiddenWidth(previewList.scrollWidth, previewList.clientWidth);
    setButtonAbility(scrollBackButton, true);
});

window.addEventListener('resize', function () {
    setPreviewScrollability = getPreviewScrollabilitySetter(previewList);
    scrollPreviewList = getScrollNormalizer(previewList);
    if (accumulatedScrollWidth !== previewList.scrollLeft) {
        accumulatedScrollWidth = previewList.scrollLeft;
    }
    hiddenWidth = getHiddenWidth(previewList.scrollWidth, previewList.clientWidth);
    if (!previewList.classList.contains('column--layout')) {
        setPreviewScrollability();
    }
});

let setPreviewScrollability = getPreviewScrollabilitySetter(previewList);
let scrollPreviewList = getScrollNormalizer(previewList);

