document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header'); // Select the header element

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Add a class when scrolling down
            header.classList.add('scrolled');
        } else {
            // Remove the class when at the top
            header.classList.remove('scrolled');
        }
    });
});