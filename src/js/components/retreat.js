export class Retreat {
  #retreatId;
  #retreatCard;
  #inclusionItem;
  #exclusionItem;
  #packageCard;
  #packageOption;
  #itineraryCard;

  constructor(
    container,
    highlighted,
    arabicTitle,
    location,
    price,
    description,
    aboutRetreat,
    date,
    group,
    inclusions = [],
    exclusions = [],
    packages = [],
    itineraries = []
  ) {
    this.container = container;
    this.highlighted = highlighted;
    this.arabicTitle = arabicTitle;
    this.location = location;
    this.price = price;
    this.description = description;
    this.date = date;
    this.group = group;
    this.aboutRetreat = aboutRetreat;
    this.inclusions = inclusions;
    this.exclusions = exclusions;
    this.packages = packages;
    this.itineraries = itineraries;
  }

  createCard(headerImage) {
    this.#retreatCard = `<li><article class="retreat-card shadow">
    <p class="arabic-title">${this.arabicTitle}</p>
    <img
      class="img-border"
src=${headerImage}
      alt="Card Image"
    />
    <div class="card-content">
      <div class="retreat-details">
        <p>${this.location}</p>
        <p>${this.date}</p>
      </div>
      <p>${this.description}</p>
<a href="/pages/booking.html?retreat=${this.#retreatId}" class="btn-main">
        <img
          src="/svg/book-icon.svg"
          alt="Indicator of explore more"
        />
        <span>Book Now</span>
      </a>
    </div>
  </article></li>`;

    if (this.highlighted) {
      this.container.insertAdjacentHTML("afterbegin", this.#retreatCard);
      return this.#retreatCard;
    }

    if (this.container.classList.contains("allRetreats")) {
      this.container.insertAdjacentHTML("afterbegin", this.#retreatCard);
      return this.#retreatCard;
    }
  }

  createInclusions(inclusionsContainer) {
    this.inclusions.forEach((inclusion) => {
      this.#inclusionItem = `
        <li>
          <div>
            <img id="pickup" width="22px" height="auto" src="/svg/include.svg" alt="">
						${inclusion.name}
          </div>
          <p>${inclusion.note || ""}</p>
        </li>`;
      inclusionsContainer.insertAdjacentHTML("afterbegin", this.#inclusionItem);
      return this.#inclusionItem;
    });
  }

  createExclusions(exclusionsContainer) {
    this.exclusions.forEach((exclusion) => {
      this.#exclusionItem = `
        <li>
          <div>
            <img id="pickup" width="22px" height="auto" src="/svg/exclude.svg" alt="">
						${exclusion.name}
          </div>
          <p>${exclusion.note || ""}</p>
        </li>`;
      exclusionsContainer.insertAdjacentHTML("afterbegin", this.#exclusionItem);
      return this.#exclusionItem;
    });
  }

  createPackage(packagesContainer) {
    this.packages.forEach((packageItem) => {
      this.#packageCard = `
        <li>
          <article class="package-card block-padded inline-padded shadow">
            <div class="card-content">
              <h3>${packageItem.name}</h3>
              <div class="package-price">
                <p>$${packageItem.price}</p>
                <p>DEPOSIT ($${packageItem.deposit})</p>              
              </div>
              <h4>Package Details</h4>
              <p>${packageItem.details}</p>
              <button data-package="${packageItem.name}" class="card-book">
                <span>Book Now</span>
                <img
                  src="/svg/book-icon.svg"
                  alt="Indicator of explore more">
              </button>
              <p class="package-detail">
                Available until ${packageItem.date} ${
        packageItem.soldOut ? " | Sold Out" : ""
      }
              </p>
            </div>
          </article>
        </li>`;
      packagesContainer.insertAdjacentHTML("afterbegin", this.#packageCard);
      return this.#packageCard;
    });
  }

  createPackageOption(select) {
    this.packages.forEach((packageItem) => {
      this.#packageOption = `<option value="${packageItem.name}">${packageItem.name} (${packageItem.price})</option>`;
      select.insertAdjacentHTML("afterbegin", this.#packageOption);
      return this.#packageCard;
    });
  }

  createItinerary(itineraryContainer) {
    this.itineraries.forEach((itinerary) => {
      this.#itineraryCard = `
        <article class="flip-card">
          <div class="content shadow">
            <h3>${itinerary.name}</h3>
            <p>${itinerary.details}</p>
          </div>
          <div class="cover">
            <img src="/img/kaaba.jpg" alt="">
            <h3>${itinerary.name}</h3>
          </div>
          </article>`;

      itineraryContainer.insertAdjacentHTML("beforeend", this.#itineraryCard);
      return this.#itineraryCard;
    });
  }

  setRetreatId(idFromDatabase) {
    this.#retreatId = idFromDatabase;
  }
}
