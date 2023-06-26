export const createImageCard = function (imageUrl) {
  const imageCard = `<img
  class="image-card shadow"
  src="${imageUrl}"
  alt="Picture of the Kaaba"
  />`;

  const carousel = document.querySelector(".gallery-carousel");
  carousel.insertAdjacentHTML("afterbegin", imageCard);
  const imageCards = Array.from(document.querySelectorAll(".image-card"));
};
