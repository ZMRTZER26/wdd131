import { imageCollection } from "./images.mjs";

const galleryContainer = document.getElementById("gallery-container");
const overlay = document.getElementById("overlay");
const enlargedImage = document.getElementById("enlarged-image");
const imageName = document.getElementById("image-name");
const imageLink = document.getElementById("image-link");
const closeOverlay = document.getElementById("close-overlay");

// Populate the gallery
imageCollection.webpImages.forEach((image) => {
  const pictureElement = document.createElement("picture");
  const sourceElement = document.createElement("source");
  const imageElement = document.createElement("img");
  const imageCaption = document.createElement("p");
  const wrapper = document.createElement("div");

  sourceElement.srcset = image.src; // WebP source
  sourceElement.type = "image/webp";

  imageElement.src = imageCollection.images.find(img => img.name === image.name).src; // Fallback
  imageElement.alt = image.name;
  imageCaption.textContent = image.name;

  pictureElement.appendChild(sourceElement);
  pictureElement.appendChild(imageElement);
  wrapper.appendChild(pictureElement);
  wrapper.appendChild(imageCaption);

  galleryContainer.appendChild(wrapper);

  // Event listener for overlay with original image
  imageElement.addEventListener("click", () => {
    const originalImage = imageCollection.originalImages.find(
      (origImg) => origImg.name === image.name
    );
    enlargedImage.src = originalImage.src; // Use original image source
    enlargedImage.alt = originalImage.name;
    imageName.textContent = originalImage.name;
    imageLink.href = originalImage.link;
    imageLink.textContent = "Check out " + originalImage.name + "'s streams";
    overlay.style.display = "flex";
  });
});

// Close overlay
closeOverlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
