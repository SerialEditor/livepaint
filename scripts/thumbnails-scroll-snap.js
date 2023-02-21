// function getInitStateSetter(parent, children) {
//     let props = {
//         clientWidth: parent.clientWidth,
//         firstChild: children[0],
//         lastChild: children[children.length - 1],
//     };
//     return function () {
//         for (let child of children) {
//             if (child.classList.contains('snap--start')) {
//                 child.classList.remove('snap--start');
//             } else if (child.classList.contains('snap--end')) {
//                 child.classList.remove('snap--end');
//             }
//         }
//         props.firstChild.classList.add('snap--start');
//         let pointsQuantity = Math.floor(props.clientWidth / 160);
//         for (let i = pointsQuantity - 1; i < children.length; i += pointsQuantity) {
//             children[i].classList.add('snap--end');
//         }
//         if (!props.lastChild.classList.contains('snap--end')) {
//             props.lastChild.classList.add('snap--end');
//         }
//     }
// }

// let isResize;

// window.addEventListener('resize', function () {
//     if (!previewList.classList.contains('column--layout')) {
//         setInitState = getInitStateSetter(previewList, displayPreviews);
//         setInitState();
//         isResize = false;
//     } else {
//         isResize = true;
//     }
// });

// let setInitState = getInitStateSetter(previewList, displayPreviews);
// setInitState();

previewList.addEventListener('wheel', function (evt) {
    evt.preventDefault();
    if (evt.deltaY > 0) {
        previewList.scrollBy(previewList.clientWidth, 0);
    } else {
        previewList.scrollBy(-previewList.clientWidth, 0);
    }
});

let x = null;
previewList.addEventListener('touchstart', function(evt)  {
    x = evt.touches[0].clientX;
});
previewList.addEventListener('touchmove', function (evt) {
    if (!x) return;
    x = (x - evt.touches[0].clientX < 0) ? -previewList.clientWidth : previewList.clientWidth;
    previewList.scrollBy(x, 0);
    x = null;
});