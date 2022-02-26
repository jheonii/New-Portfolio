'use strict'

//scrollIntoViews Function
function scrollIntoViews(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" })
}

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

//NavBar Handle scrolling when tapping on the navbar list
const navbarMenu = document.querySelector('.navbar-list');
navbarMenu.addEventListener('click', (event) => {
    const link = event.target.dataset.link;
    scrollIntoViews(link);
    navbarMenu.classList.remove('open');
})

//Navbar toggle button
const navbarToggleBtn = document.querySelector('.toggle-button');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})

//Handle scrolling to contact area
const homebtn = document.querySelector('.home-btn');
homebtn.addEventListener('click', () => {
    scrollIntoViews("#contact")
})


//Handle opacity when scorlling
const home = document.querySelector('.home-container');
const homeHeight = home.getBoundingClientRect().height

document.addEventListener('scroll', () => {
    const homeOpacity = 1 - (window.scrollY / homeHeight);
    home.style.opacity = homeOpacity;
})


//arrow up
const btnArrow = document.querySelector('.arrow-up');
btnArrow.addEventListener("click", () => {
    scrollIntoViews('#home');
})

//make arrow btn visible when scrolling
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        btnArrow.classList.add('visible');
    } else {
        btnArrow.classList.remove('visible');
    }
})

//projects
const workBtnContainer = document.querySelector('.project-titles');
const projectContainer = document.querySelector('.projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    //project titles button selection 
    const projectBtn = document.querySelector('.project-button.project-active');
    const projectBtnFilter = e.target.nodeName == 'BUTTON' ? e.target : e.target.parentNode;
    projectBtn.classList.remove('project-active');
    projectBtnFilter.classList.add('project-active')

    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach(project => {
            if (filter === "*" || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 200);
})


