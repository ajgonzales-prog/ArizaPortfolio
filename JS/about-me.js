// Toggle mobile navigation menu visibility
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Handle click event for mobile menu toggle
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});