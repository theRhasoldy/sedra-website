import "/scss/main.scss";
import "./slider.js";

import { createImageCard } from "./createImageCards.js";

import { app } from "../firebase.js";
import {
  getFirestore,
  doc,
  query,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

import { getStorage, listAll, ref, getDownloadURL } from "firebase/storage";

import { Retreat } from "./retreat";

// Get retreat id from url
const urlParams = new URLSearchParams(window.location.search);
const retreatURL = urlParams.get("retreat");

const db = getFirestore(app);
const retreatRef = doc(db, "retreats", retreatURL);
const retreatSnap = await getDoc(retreatRef);

const bookingPage = document.querySelector(".booking-page");

const retreat = new Retreat(
  bookingPage,
  retreatSnap.data().highlighted,
  retreatSnap.data().arabicTitle,
  retreatSnap.data().location,
  retreatSnap.data().price,
  retreatSnap.data().description,
  retreatSnap.data().aboutRetreat,
  retreatSnap.data().date,
  retreatSnap.data().group
);

retreat.setRetreatId(urlParams);

// Set page data
bookingPage.querySelector("#booking-description").textContent =
  retreat.description;

bookingPage.querySelector("#location").textContent = retreat.location;
bookingPage.querySelector("#date").textContent = retreat.date;
bookingPage.querySelector(
  "#group"
).textContent = `Group Size: ${retreat.group}`;

bookingPage.querySelector("#booking-details").textContent =
  retreat.aboutRetreat;

const headerImage = bookingPage.querySelector("#booking-header-image");

const storage = getStorage();
getDownloadURL(ref(storage, `${retreatSnap.id}/header.jpg`)).then((url) => {
  headerImage.src = url;
});

const listRef = ref(storage, retreatURL);

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

// Get inclusions and add it to retreat object
const inclusionsQuery = query(
  collection(db, "retreats", retreatURL, "inclusions")
);
const inclusionSnapshots = await getDocs(inclusionsQuery);

inclusionSnapshots.forEach((inclusionSnap) => {
  retreat.inclusions.push(inclusionSnap.data());
});
const inclusionsContainer = bookingPage.querySelector("#inclusions");
retreat.createInclusions(inclusionsContainer);

// Get packages and add it to retreat object
const packagesQuery = query(collection(db, "retreats", retreatURL, "packages"));
const packageSnapshots = await getDocs(packagesQuery);

packageSnapshots.forEach((packageSnap) => {
  retreat.packages.push(packageSnap.data());
});

const packagesContainer = bookingPage.querySelector("#packages");
const packagesSelect = bookingPage.querySelector("#select-package");
const bookButton = bookingPage.querySelector("#book-package");

retreat.createPackage(packagesContainer);
retreat.createPackageOption(packagesSelect);

const cardBookButtons = bookingPage.querySelectorAll(".card-book");

//Get package name from clicking on buttons
bookButton.addEventListener("click", () => {
  console.log(packagesSelect.value);
});

cardBookButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.dataset.package);
  });
});

// Get itinerary and add it to retreat object
const itineraryQuery = query(
  collection(db, "retreats", retreatURL, "itineraries")
);
const itinerarySnapshots = await getDocs(itineraryQuery);

itinerarySnapshots.forEach((itinerarySnap) => {
  retreat.itineraries.push(itinerarySnap.data());
});
const itineraryContainer = bookingPage.querySelector("#itinerary");
retreat.createItinerary(itineraryContainer);
