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

function getScrollNormalizer () {
    let previewClientWidth = previewList.clientWidth;
    let scrollWidthNorm = (Math.trunc(previewClientWidth / 160)) * 160;
    return function () {
        previewList.scrollBy(scrollWidthNorm, 0);
    };
}

scrollForwardButton.addEventListener('click', function () {
    scrollPreviewList();
});

window.addEventListener('resize', function () {
    setPreviewScrollability = getPreviewScrollabilitySetter();
    scrollPreviewList = getScrollNormalizer();
    if (!previewList.classList.contains('column--layout')) {
        setPreviewScrollability();
    }
});

let setPreviewScrollability = getPreviewScrollabilitySetter();
let scrollPreviewList = getScrollNormalizer();

