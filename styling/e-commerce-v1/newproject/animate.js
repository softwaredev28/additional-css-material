let sideBar = document.querySelector(".sidebar");

document.querySelector("#menu-btn").onclick = () => {
  sideBar.classList.toggle("active");
};
document.querySelector("#close-side-bar").onclick = () => {
  sideBar.classList.remove("active");
};

// ==> search form

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

window.onscroll = () => {
  sideBar.classList.remove("active");
  searchForm.classList.remove("active");
};

// ==> swiper hero image

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ==> light-mode
let themeToggler = document.querySelector("#dark-mode");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.querySelector("body").classList.add("active");
  } else {
    document.querySelector("body").classList.remove("active");
  }
};

// load
// function createLoad() {
//   document.querySelector(".load-container").classList.add("fadeout");
// }

// function fade() {
//   setInterval(createLoad, 8000);
// }

// const getWrapper = document.querySelector(".load-container");
/* === atau === */

function load() {
  document.querySelector(".load-container").classList.add("loading");
}
function setIn() {
  setInterval(load, 8000);
}

window.onload = setIn;

// login form

const getLogin = document.querySelector("header .login-form");
const getUserIcon = document.querySelector("header .icons .fa-user");

getUserIcon.addEventListener("click", () => {
  getLogin.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  getLogin.classList.remove("active");
});

// ==aos==

// ==> popup box
// const popup = document.getElementById("popup");

// function openPopup() {
//   popup.classList.add("open-popup");
// }
// function closePopup() {
//   popup.classList.remove("open-popup");
// }
