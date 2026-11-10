
/* 
FRONTDOOR: Carousel gallery feature

for displaying the images to the specific project.
Consists of Next and Previous buttons for switching
between the images
*/


// HTML elements
const galleryImage = document.getElementById("gallery-image");
const previousbutton = document.getElementById("previous-image");
const nextButton = document.getElementById("next-image");
const imageCounter = document.getElementById("image-counter");

// getting images for selected project in question
const images = selectedProject?.images || [];

// Start with first image
let currentImage = 0;

// Display the current images
function showImage() {

    if (images.length === 0) {
        galleryImage.style.display = "none";
        imageCounter.textContent = "No images";
        previousbutton.disabled = true;
        nextButton.disabled = true;
        return;
    }

    galleryImage.src = images[currentImage];
    galleryImage.alt = "Project image" + (currentImage + 1);

    imageCounter.textContent =
    (currentImage + 1) + " / " + images.length;
}

//previous image
previousbutton.addEventListener("click", function() {

    currentImage--;
    if(currentImage <0) {
        currentImage = images.length -1;
    }

    showImage();
})

//Next image
nextButton.addEventListener("click", function() {

    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    showImage();

})

//show the first image when the page loads
showImage();