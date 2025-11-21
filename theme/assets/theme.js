// This file contains JavaScript code for the theme, enabling interactivity and dynamic features.

// Example of a simple JavaScript function to toggle a mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});

// Example of a function to handle product image gallery
const productImages = document.querySelectorAll('.product-image');
const mainImage = document.querySelector('.main-product-image');

productImages.forEach(image => {
    image.addEventListener('click', function() {
        mainImage.src = this.src;
    });
});

// Add any additional JavaScript functionality as needed for the theme.