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

window.addEventListener('resize', function () {
    setPreviewScrollability = getPreviewScrollabilitySetter();
    if (!previewList.classList.contains('column--layout')) {
        setPreviewScrollability();
    }
});

let setPreviewScrollability = getPreviewScrollabilitySetter();
