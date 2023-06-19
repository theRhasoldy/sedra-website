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
