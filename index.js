let zoomDialog;
let zoomDialogRect;
let zoomDialogImage;
/**
 * @type {HTMLSpanElement}
 */
let ageSpan;

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

function ageSpanClick() {
    const dst = ageSpan.getAttribute("data-show-tooltip");
    if (dst === null) return;
    ageSpan.setAttribute("data-show-tooltip", dst === "false" ? "true" : "false");
    repositionAgeSpanTooltip();
}

function repositionAgeSpanTooltip() {
    const ageSpanAfter = getComputedStyle(ageSpan, ":after");
    const rect = ageSpan.getBoundingClientRect();

    let side = 1;
    if (rect.x + parseFloat(ageSpanAfter.width) > document.documentElement.clientWidth) {
        side = -1;
    }

    ageSpan.setAttribute("data-side", side);
}

window.onload = () => {
    zoomDialog = document.getElementById("zoom-dialog");
    zoomDialogRect = zoomDialog.getBoundingClientRect();
    zoomDialogImage = document.getElementById("zoom-dialog-image");

    zoomDialog.addEventListener("click", dialogClick);

    ageSpan = document.getElementById("age-span");
    ageSpan.innerText = (new Date(Date.now() - new Date(2004, 9, 7, 0, 0, 0, 0)).getUTCFullYear() - 1970);
    ageSpan.addEventListener("click", ageSpanClick);

    window.addEventListener("resize", () => {
        repositionAgeSpanTooltip();
    });
};