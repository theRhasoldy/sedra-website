const slider = document.querySelector(".slider");
const images = Array.from(document.querySelectorAll(".hero-images"));

let currentIndex = 0;
let slideWidth = images[0].clientWidth;

const slide = function () {
  currentIndex = (currentIndex + 1) % images.length;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

setInterval(slide, 1000);

window.addEventListener("resize", function () {
  slideWidth = images[0].clientWidth;
});
