'use strict';

let viewSettings = document.querySelector('.view-settings');
let settingsList = viewSettings.querySelector('.view-settings__list');
let settingsButton = viewSettings.querySelector('.settings-button');
let layoutSetButton = viewSettings.querySelector('.layout--set');
let sliderOpenButton = document.querySelector('.slider--set');
let sliderMask = document.querySelector('.slider-mask');
let slider = document.querySelector('.slider');


settingsButton.addEventListener('click', function () {
    settingsList.classList.toggle('view-settings__list--showed');
});

layoutSetButton.addEventListener('click', function () {
        if (!previewList.classList.contains('column--layout')) {
            layoutSetButton.textContent = 'Выстроить в ряд';
            previewList.style.transform = `translateX(0)`;
            setTimeout(function () {
                previewList.classList.add('column--layout');
            }, 500);
            } else {
            layoutSetButton.textContent = 'Выстроить колонками';
            previewList.classList.remove('column--layout');
            setTranslateInitState();
        }
    setTimeout(function () {
        settingsList.classList.remove('view-settings__list--showed');
    }, 250);
});

function openSlider() {
    sliderMask.hidden = false;
    slider.hidden = false;
    rootElement.classList.add('overflow--hidden');
}

sliderOpenButton.addEventListener('click', function () {
    openSlider();
    if (slideSources.length > 1) {
        setButtonAbility(buttonForward, false);
    }
    settingsList.classList.remove('view-settings__list--showed');
});

document.addEventListener('click', function (evt) {
    if (!evt.target.closest('.view-settings') && settingsList.classList.contains('view-settings__list--showed')) {
        settingsList.classList.remove('view-settings__list--showed');
    }
});

// previewList.addEventListener('transitionend', function (evt) {
//     console.log(evt.elapsedTime);
// });