let scrollForwardButton = document.querySelector('.thumbnails-scroll--forward');

function getPreviewScrollabilitySetter() {
    let previewClientWidth = previewList.clientWidth;
    return function () {
        let previewScrollWidth = previewList.scrollWidth;
        if (previewScrollWidth === previewClientWidth && !scrollForwardButton.disabled) {
            setButtonAbility(scrollForwardButton, true);
        } else if (previewScrollWidth > previewClientWidth && scrollForwardButton.disabled) { 
            setButtonAbility(scrollForwardButton, false); 
        }
    };
}

function getScrollNormalizer (target) {
    let scrollabilityWidth = target.scrollWidth;
    let targetClientWidth = target.clientWidth;
    let scrollWidthNorm = (Math.trunc(targetClientWidth / 160)) * 160;
    return function () {
        target.scrollBy(scrollWidthNorm, 0);
        currentScrollWidth += scrollWidthNorm;
        console.log(currentScrollWidth);
        console.log(target.scrollWidth - currentScrollWidth);
    };
}

scrollForwardButton.addEventListener('click', function () {
    scrollPreviewList();
});

window.addEventListener('resize', function () {
    setPreviewScrollability = getPreviewScrollabilitySetter();
    scrollPreviewList = getScrollNormalizer(previewList);
    if (!previewList.classList.contains('column--layout')) {
        setPreviewScrollability();
    }
});

let setPreviewScrollability = getPreviewScrollabilitySetter();
let scrollPreviewList = getScrollNormalizer(previewList);

