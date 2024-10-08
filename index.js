let zoomDialog;
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

window.onload = () => {
    zoomDialog = document.getElementById("zoom-dialog");
    zoomDialogImage = document.getElementById("zoom-dialog-image");

    let ageSpan = document.getElementById("age-span");
    ageSpan.innerText = (new Date(Date.now() - new Date(2004, 9, 7, 0, 0, 0, 0)).getUTCFullYear() - 1970);
};