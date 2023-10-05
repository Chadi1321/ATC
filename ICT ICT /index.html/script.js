// JavaScript for displaying confirmation message

document.getElementById("inquiryForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Get user input (name and mobile number)
    var name = document.getElementById("name").value;
    
    // Display confirmation message
    var confirmation = document.createElement("div");
    confirmation.id = "confirmation";
    confirmation.innerHTML = "We have received your inquiry, " + name + ". We will get back to you soon. Thank you for contacting ATC.";
    
    // Clear the form
    document.getElementById("inquiryForm").reset();
    
    // Append the confirmation message to the form
    document.getElementById("inquiryForm").appendChild(confirmation);

    // JavaScript for image slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Initial display
showSlide(currentSlide);

// Event listeners for prev and next buttons
document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);

});
