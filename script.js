// Initialize the AOS (Animate On Scroll) library
AOS.init({
    duration: 1000, // animation duration in milliseconds
    once: true,     // whether animation should happen only once
});

// The rest of your JavaScript for the mobile menu can stay as it is

// Contact form handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message submitted successfully!');
  this.reset();
});
