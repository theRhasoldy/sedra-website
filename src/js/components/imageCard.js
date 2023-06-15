import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const storage = getStorage();

// Create a reference under which you want to list
const listRef = ref(storage, "gallery");

// Find all the prefixes and items.
listAll(listRef)
  .then((res) => {
    res.items.forEach((itemRef) => {
      getDownloadURL(itemRef).then((url) => {
        createImageCard(url);
      });
    });
  })
  .catch((error) => {
    // Uh-oh, an error occurred!
  });

const createImageCard = function (imageUrl) {
  const imageCard = `<img
  class="image-card img-border shadow"
  src="${imageUrl}"
  alt="Picture of the Kaaba"
  />`;

  const carousel = document.querySelector(".gallery-carousel");
  carousel.insertAdjacentHTML("afterbegin", imageCard);
  const imageCards = Array.from(document.querySelectorAll(".image-card"));

  carousel.addEventListener("mousedown", () => {
    imageCards.forEach((image) => {
      image.style.transform = "rotate(2deg)";
    });
  });

  carousel.addEventListener("mouseup", () => {
    imageCards.forEach((image) => {
      image.style.transform = "rotate(0deg)";
    });
  });
};
