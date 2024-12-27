let currentImageIndex = 0;
const images = document.querySelectorAll(".image-container");
const texts = document.querySelectorAll(".text-container p");
const buttons = document.querySelectorAll(".action-buttons button");

function showImage(index, direction) {
    images.forEach((img, i) => {
        // Remove active class to reset animation
        img.classList.remove("spin-left", "spin-right");
        img.style.display = "none";

        if (i === index) {
            img.style.display = "block";
            // Apply the appropriate spin direction
            img.classList.add(direction);
        }
    });

    texts.forEach((text, i) => {
        text.style.display = i === index ? "block" : "none";
    });

    buttons.forEach((button, i) => {
        button.style.display = i === index ? "block" : "none";
    });
}

function showNextImage() {
    const prevImageIndex = currentImageIndex;
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Spin forward
    showImage(currentImageIndex, "spin-right");
}

function showPreviousImage() {
    const prevImageIndex = currentImageIndex;
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;

    // Spin backward
    showImage(currentImageIndex, "spin-left");
}

// Initialize the first image
showImage(currentImageIndex, "spin-right");


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkModeEnabled", isDarkMode);
}

window.onload = () => {
    const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    const button = document.querySelector('.dark-mode-button');

    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        button.textContent = 'Sunny Mode';
    } else {
        button.textContent = 'Dark Mode';
    }
};
