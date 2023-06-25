import "/scss/main.scss";

import { app } from "../firebase.js";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { Retreat } from "./retreat";

const urlParams = new URLSearchParams(window.location.search);
const retreatURL = urlParams.get("retreat");

const db = getFirestore(app);
const retreatRef = doc(db, "retreats", retreatURL);
const retreatSnap = await getDoc(retreatRef);

const bookingPage = document.querySelector(".booking-page");

const retreat = new Retreat(
  bookingPage,
  retreatSnap.data().arabicTitle,
  retreatSnap.data().location,
  retreatSnap.data().price,
  retreatSnap.data().description
);
retreat.setRetreatId(urlParams);

const headerImage = bookingPage.querySelector("#booking-header-image");
const headerDesc = bookingPage.querySelector("#booking-description");

headerDesc.textContent = retreat.description;

const storage = getStorage();
getDownloadURL(ref(storage, `${retreatSnap.id}/header.jpg`)).then((url) => {
  headerImage.src = url;
});
