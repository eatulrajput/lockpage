// Get the button element
const toggleButton = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-link');

// Function to toggle dark mode
function toggleDarkMode() {
    if (themeLink.getAttribute('href') === 'assets/css/light.css') {
        themeLink.setAttribute('href', 'assets/css/dark.css');
        localStorage.setItem('theme', 'dark');
    } else {
        themeLink.setAttribute('href', 'assets/css/light.css');
        localStorage.setItem('theme', 'light');
    }
}

// Event listener for the button
toggleButton.addEventListener('click', toggleDarkMode);

// Load the saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme === 'dark') {
        themeLink.setAttribute('href', 'assets/css/dark.css');
    } else {
        themeLink.setAttribute('href', 'assets/css/light.css');
    }
});
