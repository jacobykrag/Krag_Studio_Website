$(document).ready(function () {
    $('#menu img').on('click', function () {
        $(this).toggleClass("before after");
    });
    $('#menu img').on('click', function () {
        $("#mobile").toggleClass("stop start");
    });
    $('.menulink').on('click', function () {
        $("#mobile").toggleClass("stop start");
        $("#menu img").toggleClass("before after");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            
            header.classList.add('scrolled');
        } else {
            
            header.classList.remove('scrolled');
        }
    });
});