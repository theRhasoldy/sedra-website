import { app } from "../firebase.js";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";

import { Retreat } from "./retreat";
import { createImageCard } from "./createImageCards.js";

const storage = getStorage();

const retreatSection = document.querySelector("#retreats-cards");

// Create a reference under which you want to list
const listRef = ref(storage, "gallery");

const db = getFirestore(app);
const retreatsQuery = query(collection(db, "retreats"));
const retreatsSnapshot = await getDocs(retreatsQuery);

retreatsSnapshot.forEach((retreatSnap) => {
  const retreat = new Retreat(
    retreatSection,
    retreatSnap.data().highlighted,
    retreatSnap.data().arabicTitle,
    retreatSnap.data().location,
    retreatSnap.data().price,
    retreatSnap.data().description
  );

  getDownloadURL(ref(storage, `${retreatSnap.id}/header.jpg`)).then((url) => {
    retreat.createCard(url);
  });

  retreat.setRetreatId(retreatSnap.id);
});

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
