let zoomDialog;
let zoomDialogImage;

/**
 * @param {string} imageSource
 */
function zoomImage(imageSource) {
    zoomDialog.showModal();
    zoomDialogImage.setAttribute("src", imageSource);
}

function closeDialog() {
    zoomDialog.close();
}

window.onload = () => {
    zoomDialog = document.getElementById("zoom-dialog");
    zoomDialogImage = document.getElementById("zoom-dialog-image");
};