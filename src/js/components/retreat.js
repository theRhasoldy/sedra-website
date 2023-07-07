export class Retreat {
  #retreatId;
  #retreatCard;
  #inclusionItem;
  #packageCard;

  constructor(
    container,
    arabicTitle,
    location,
    price,
    description,
    aboutRetreat,
    date,
    group,
    inclusions = [],
    packages = []
  ) {
    this.container = container;
    this.arabicTitle = arabicTitle;
    this.location = location;
    this.price = price;
    this.description = description;
    this.date = date;
    this.group = group;
    this.aboutRetreat = aboutRetreat;
    this.inclusions = inclusions;
    this.packages = packages;
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
        <p>${this.price}</p>
      </div>
      <p>${this.description}</p>
<a href="/pages/booking.html?retreat=${this.#retreatId}" class="btn-main">
        <span>Book Now</span>
        <img
          src="/svg/book-icon.svg"
          alt="Indicator of explore more"
        />
      </a>
    </div>
  </article></li>`;
    this.container.insertAdjacentHTML("afterbegin", this.#retreatCard);
    return this.#retreatCard;
  }

  createInclusions(inclusionsContainer) {
    this.inclusions.forEach((inclusion) => {
      this.#inclusionItem = `
        <li>
          <div>
            <img id="pickup" width="48px" height="48px" src="/svg/${
              inclusion.included ? "book-icon.svg" : ""
            }" alt="">
              ${inclusion.name}
          </div>
          <p>${inclusion.note}</p>
        </li>`;
      inclusionsContainer.insertAdjacentHTML("afterbegin", this.#inclusionItem);
      return this.#inclusionItem;
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
              <a href="" class="btn-main">
                <span>Book Now</span>
                <img
                  src="/svg/book-icon.svg"
                  alt="Indicator of explore more"
                />
              </a>
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

  setRetreatId(idFromDatabase) {
    this.#retreatId = idFromDatabase;
  }
}
