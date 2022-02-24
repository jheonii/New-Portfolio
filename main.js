'use strict'


//Make navbar transparent when it's on top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(`${navbarHeigt} ----navbar height`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }
    else {
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling when tapping on the navbar list
const navbarMenu = document.querySelector('.navbar-list');
navbarMenu.addEventListener('click', (event) => {
    const link = event.target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoViews(link);
})

//Handle scrolling to contact area
const homebtn = document.querySelector('.home-btn');
homebtn.addEventListener('click', () => {
    scrollIntoViews("#contact")
})

//scrollIntoViews Function
function scrollIntoViews(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" })
}

//Handle opacity when scorlling
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height

document.addEventListener('scroll', () => {
    const homeOpacity = 1 - (window.scrollY / homeHeight);
    home.style.opacity = homeOpacity;
})