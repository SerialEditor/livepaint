let scrollForwardButton = document.querySelector('.thumbnails-scroll--forward');
let previewScrollableState;

function getPreviewScrollableState() {
    let previewClientWidth = previewList.clientWidth;
    return function () {
        let previewScrollWidth = previewList.scrollWidth;
        console.log(previewClientWidth + ': clientWidth');
        console.log(previewScrollWidth);
        if (previewClientWidth === previewScrollWidth) {
            setButtonAbility(scrollForwardButton, true);
        } else { setButtonAbility(scrollForwardButton, false); }
    }
}

window.addEventListener('resize', function () {
    previewScrollableState = getPreviewScrollableState();
    if (!previewList.classList.contains('column--layout')) {
        previewScrollableState();
    }
});

previewScrollableState = getPreviewScrollableState();
previewScrollableState();

