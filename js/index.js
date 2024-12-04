const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

const heading = document.getElementById("welcome");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
