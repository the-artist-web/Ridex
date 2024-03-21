'use strict';

/**
 * header
 */
const header = document.querySelector("[data-header]"),
navbar = document.querySelector("[data-navbar]"),
btnMenu = document.querySelector("[data-btn-menu]"),
overflow = document.querySelector("[data-overflow]"),
item = document.querySelector(".item"),
item2 = document.querySelector(".item2"),
item3 = document.querySelector(".item3"),
btnTop = document.querySelector("[data-btn-top]"),
navbarLink = document.querySelectorAll(".navbar-link");

// header scroll and btn scroll
window.addEventListener("scroll", () => {
    if (scrollY >= 100) {
        header.classList.add("active");
        btnTop.classList.add("active");
    } else {
        header.classList.remove("active");
        btnTop.classList.remove("active");
    };
});

// navbar
btnMenu.addEventListener("click", () => {
    overflow.classList.toggle("active");
    navbar.classList.toggle("active");
    item.classList.toggle("active");
    item2.classList.toggle("active");
    item3.classList.toggle("active");
});

// overflow
overflow.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overflow.classList.toggle("active");
    item.classList.toggle("active");
    item2.classList.toggle("active");
    item3.classList.toggle("active");
});

// navbar link
for (let i = 0; i < navbarLink.length; i++) {
    navbarLink[i].addEventListener("click", () => {
        overflow.classList.toggle("active");
        navbar.classList.toggle("active");
        item.classList.toggle("active");
        item2.classList.toggle("active");
        item3.classList.toggle("active");
    });
};