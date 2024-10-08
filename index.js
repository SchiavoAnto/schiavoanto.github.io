let zoomDialog;
let zoomDialogRect;
let zoomDialogImage;

/**
 * @param {string} imageSource
 */
function zoomImage(imageSource) {
    zoomDialog.showModal();
    zoomDialogImage.setAttribute("src", imageSource);
    zoomDialogImage.setAttribute("open", "true");
}

function closeDialog() {
    zoomDialog.close();
    zoomDialogImage.setAttribute("open", "false");
}

/**
 * @param {PointerEvent} event 
 */
function dialogClick(event) {
    if ((event.x < zoomDialogRect.x || event.x > zoomDialogRect.x + zoomDialogRect.width) ||
        (event.y < zoomDialogRect.y || event.y > zoomDialogRect.y + zoomDialogRect.height)) {
        closeDialog();
    }
} 

window.onload = () => {
    zoomDialog = document.getElementById("zoom-dialog");
    zoomDialogRect = zoomDialog.getBoundingClientRect();
    zoomDialogImage = document.getElementById("zoom-dialog-image");

    zoomDialog.addEventListener("click", dialogClick);

    let ageSpan = document.getElementById("age-span");
    ageSpan.innerText = (new Date(Date.now() - new Date(2004, 9, 7, 0, 0, 0, 0)).getUTCFullYear() - 1970);
};