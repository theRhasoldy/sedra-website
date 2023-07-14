import "/scss/main.scss";
import { app } from "../firebase.js";
import { getStorage, listAll, ref, getDownloadURL } from "firebase/storage";
import { createImageCard } from "./createImageCards.js";

const storage = getStorage();
const listRef = ref(storage, "previousRetreats");
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
