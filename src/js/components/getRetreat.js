const bookingPage = document.querySelector(".booking-page");

const urlParams = new URLSearchParams(window.location.search);
const retreat = urlParams.get("retreat");
console.log(retreat);
