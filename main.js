'use strict'


//Make navbar transparent when it's on top
const navbar = document.querySelector('#navbar');
const navbarHeigt = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(`${navbarHeigt} ----navbar height`);
    if (window.scrollY > navbarHeigt) {
        navbar.classList.add('navbar--dark');
    }
    else {
        navbar.classList.remove('navbar--dark');
    }
});