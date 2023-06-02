const retreatSection = document.querySelector(".retreats-cards");

const retreatCard = `<article class="retreat-card img-border shadow">
  <img
    class="img-border"
    src="./public/img/kaaba.jpg"
    alt="Card Image"
  />
  <div class="card-content">
    <div class="retreat-details">
      <p>Mecca & Jeddah</p>
      <p>Starting 5,000EGP</p>
    </div>
    <p>Card description goes here.</p>
    <a href="#" class="btn-main">
      <span>Book Now</span>
      <img
        src="public/svg/book-icon.svg"
        alt="Indicator of explore more"
      />
    </a>
  </div>
</article>`;

for (let index = 0; index < 4; index++) {
  retreatSection.insertAdjacentHTML("afterbegin", retreatCard);
}
