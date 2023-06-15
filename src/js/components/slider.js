const slider = document.querySelector(".slider");
const sliderImages = Array.from(slider.querySelectorAll(".hero-images"));

const carousel = document.querySelector(".gallery-carousel");

let sliderCurrentIndex = 0;
let slideWidth;

let isDown = false;
let startX;
let scrollLeft;

const slide = function (container, images) {
  slideWidth = images[0].clientWidth;
  sliderCurrentIndex = (sliderCurrentIndex + 1) % images.length;
  container.style.transform = `translateX(-${
    sliderCurrentIndex * slideWidth
  }px)`;
};

window.addEventListener("resize", function () {
  slideWidth = sliderImages[0].clientWidth;
});

setInterval(() => slide(slider, sliderImages), 2500);

const handleMouseDown = function (e) {
  isDown = true;
  carousel.classList.add("active");
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
};

const handleMouseLeave = function () {
  isDown = false;
  carousel.classList.remove("active");
};

const handleMouseUp = function () {
  isDown = false;
  carousel.classList.remove("active");
};

const handleMouseMove = function (e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = x - startX; //scroll-fast
  carousel.scrollLeft = scrollLeft - walk;
};
//firebasestorage.googleapis.com/v0/b/sedra-website.appspot.com/o/gallery%2Fpexels-yousef-14030781%20(1).jpg?alt=media&token=1af925b4-48e1-4285-b2ed-7129928d0a4e

carousel.addEventListener("mousedown", handleMouseDown);
carousel.addEventListener("mouseleave", handleMouseLeave);
carousel.addEventListener("mouseup", handleMouseUp);
carousel.addEventListener("mousemove", handleMouseMove);
