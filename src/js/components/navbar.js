const nav = document.querySelector("nav");
const navbarList = document.querySelector(".navbar-list");
const expandBtn = document.querySelector("#btn-expand");

expandBtn.addEventListener("click", () => {
  nav.classList.toggle("burger-menu");
  if (nav.classList.contains("burger-menu")) {
    nav.style.mixBlendMode = "initial";
  } else {
    nav.style.mixBlendMode = "difference";
  }
  navbarList.classList.toggle("burger-list");
});

navbarList.addEventListener("click", () => {
  nav.style.mixBlendMode = "difference";
  nav.classList.remove("burger-menu");
  navbarList.classList.remove("burger-list");
});

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
