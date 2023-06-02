import { app } from "../firebase.js";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";

const retreatSection = document.querySelector(".retreats-cards");

class Retreat {
  #retreatCard;

  constructor(container, location, price, description) {
    this.container = container;
    this.location = location;
    this.price = price;
    this.description = description;
  }

  createCard() {
    this.#retreatCard = `<article class="retreat-card img-border shadow">
    <img
      class="img-border"
      src="/img/kaaba.jpg"
      alt="Card Image"
    />
    <div class="card-content">
      <div class="retreat-details">
        <p>${this.location}</p>
        <p>${this.price}</p>
      </div>
      <p>${this.description}</p>
      <a href="#" class="btn-main">
        <span>Book Now</span>
        <img
          src="/svg/book-icon.svg"
          alt="Indicator of explore more"
        />
      </a>
    </div>
  </article>`;
    this.container.insertAdjacentHTML("afterbegin", this.#retreatCard);
  }
}

const retreatsDatabase = getFirestore(app);

const retreatsQuery = query(collection(retreatsDatabase, "retreats"));

const retreatsSnapshot = await getDocs(retreatsQuery);
console.log(retreatsSnapshot);

retreatsSnapshot.forEach((retreatSnap) => {
  const retreat = new Retreat(
    retreatSection,
    retreatSnap.data().location,
    retreatSnap.data().price,
    retreatSnap.data().description
  );
  retreat.createCard();
});