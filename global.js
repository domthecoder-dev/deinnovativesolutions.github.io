document.addEventListener('DOMContentLoaded', function() {
    const hamburgerToggle = document.querySelector('.hamburger-menu-toggle');
    const mainMenu = document.querySelector('.main-menu');

    if (hamburgerToggle && mainMenu) {
        hamburgerToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('open');
            hamburgerToggle.classList.toggle('open'); // Optional: Toggle class on the hamburger icon for visual feedback
        });
    }
});