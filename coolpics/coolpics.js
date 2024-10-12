const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
        </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const image = event.target;
    if (image.tagName === "IMG"){
        // get the src attribute from that element and 'split' it on the "-"
        let source = image.getAttribute("src");
        let imageParts = source.split("-");

        // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
        let newSource = imageParts[0] + "-full.jpeg";

        // insert the viewerTemplate into the top of the body element
        // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newSource, image.getAttribute("alt")));

        // add a listener to the close button (X) that calls a function called closeViewer when clicked
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);   
    }

}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}
// Select all images inside the gallery
const galleryImages = document.querySelectorAll(".gallery-image img");

// Loop through each image and add the click event listener
galleryImages.forEach(image => {
    image.addEventListener("click", viewHandler);
});


