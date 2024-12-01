'use strict';


// add event on multiple elements

const addEventOnElem = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const header = document.querySelector("[data-header]");
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const headerBtn = document.querySelector("[data-header-btn]");

const navToggleFunc = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", navToggleFunc);



// header active when window scroll down 100px

const activeElem = function () {
  console.log("Scrolled!");
  if (window.scrollY > 100) {
    header.classList.add("active");
    headerBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    headerBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElem);