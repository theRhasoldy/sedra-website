export const createImageCard = function (imageUrl) {
  const imageCard = `<img
  class="image-card shadow"
  src="${imageUrl}"
  alt="Photo from a retreat"
  />`;

  const carousel = document.querySelector("#gallery-carousel");
  carousel?.insertAdjacentHTML("beforeend", imageCard);
  const imageCards = Array.from(document.querySelectorAll(".image-card"));
};
