import { imageCollection } from "./images.mjs";

const startButton = document.getElementById("start-button");
const imageDisplay = document.getElementById("imageDisplay");
const imageName = document.querySelector(".image-name");
const hintButton = document.getElementById("hintButton");
const resetButton = document.getElementById("resetButton");

let isSpinning = false;
let spinInterval;
let finalImage = null;  // Store the final image for the hint button to show the name

// Function to pick a random image
function getRandomImage() {
  const randomIndex = Math.floor(
    Math.random() * imageCollection.images.length
  );
  return imageCollection.images[randomIndex];
}

// Function to start spinning
function startSpinning() {
  isSpinning = true;

  // Hide the start button and show the image display
  startButton.style.display = "none";
  imageDisplay.style.display = "block";

  // Hide image name initially
  imageName.style.visibility = "hidden";

  // Disable the hint button functionality during spinning
  hintButton.removeEventListener("click", showImageName); // Remove previous listener if any

  // Spin through images quickly
  spinInterval = setInterval(() => {
    const randomImage = getRandomImage();
    imageDisplay.src = randomImage.src;
    imageName.textContent = randomImage.name;
  }, 100); // Change image every 100ms
}

// Function to stop spinning
function stopSpinning() {
  clearInterval(spinInterval);
  isSpinning = false;

  // Display the final image
  finalImage = getRandomImage();
  imageDisplay.src = finalImage.src;
  imageName.textContent = finalImage.name;

  // Remove the chosen image from the collection
  const imageIndex = imageCollection.images.findIndex(
    (img) => img.src === finalImage.src
  );
  if (imageIndex > -1) {
    imageCollection.images.splice(imageIndex, 1); // Remove the image
  }

  // Re-enable hint button functionality
  hintButton.addEventListener("click", showImageName); // Add the listener to show the image name
}

// Function to show the image name when the hint button is clicked
function showImageName() {
  if (finalImage) {
    imageName.style.visibility = "visible"; // Show the image name
  }
}

// Event listener for the "Start" button
startButton.addEventListener("click", () => {
  if (!isSpinning) {
    startSpinning();
    setTimeout(stopSpinning, 1000 + Math.random() * 2000);
  }
});

// Event listener for the image to act as the button after the first spin
imageDisplay.addEventListener("click", () => {
  if (!isSpinning) {
    startSpinning();
    setTimeout(stopSpinning, 1000 + Math.random() * 2000);
  }
});

// Event listener for the Reset Button
resetButton.addEventListener("click", () => {
  // Reassign the images array from the images.mjs file to restore the original images
  imageCollection.images = [...imageCollection.originalImages];

  // Show the start button again and reset the display
  startButton.style.display = "block";
  imageDisplay.style.display = "none";
  imageName.style.visibility = "hidden";

  // Reset hint button functionality
  hintButton.removeEventListener("click", showImageName); // Remove the event listener
});
