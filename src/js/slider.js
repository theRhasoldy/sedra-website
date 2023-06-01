const slider = document.querySelector(".slider");
const sliderImages = Array.from(slider.querySelectorAll(".hero-images"));

let sliderCurrentIndex = 0;
let slideWidth;

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

const carousel = document.querySelector(".gallery-carousel");
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", handleMouseDown);
carousel.addEventListener("touchstart", handleTouchStart);

carousel.addEventListener("mouseleave", handleMouseLeave);
carousel.addEventListener("touchend", handleTouchEnd);

carousel.addEventListener("mouseup", handleMouseUp);
carousel.addEventListener("touchcancel", handleTouchEnd);

carousel.addEventListener("mousemove", handleMouseMove);
carousel.addEventListener("touchmove", handleTouchMove, { passive: false });

function handleMouseDown(e) {
  isDown = true;
  carousel.classList.add("active");
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
}

function handleMouseLeave() {
  isDown = false;
  carousel.classList.remove("active");
}

function handleMouseUp() {
  isDown = false;
  carousel.classList.remove("active");
}

function handleMouseMove(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = x - startX; //scroll-fast
  carousel.scrollLeft = scrollLeft - walk;
}

function handleTouchStart(e) {
  isDown = true;
  carousel.classList.add("active");
  startX = e.touches[0].pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
}

function handleTouchEnd() {
  isDown = false;
  carousel.classList.remove("active");
}

function handleTouchMove(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - carousel.offsetLeft;
  const walk = x - startX * 3; //scroll-fast
  carousel.scrollLeft = scrollLeft - walk;
}
