import people from "./data.js";
import getElement from "./getElement.js";

const slideContainer = getElement(".slide-container");
const initApp = () => {
  const nextBtn = getElement(".next-btn");
  const prevBtn = getElement(".prev-btn");

  slideContainer.innerHTML = people
    .map((person, i) => {
      const { name, job, img, text } = person;

      return `<article class="slide ${selectClass(person, i)}">
    <img
      src="${img}"
      class="img"
      alt="${name}"
    />
    <h4>${name}</h4>
    <p class="title">${job}</p>
    <p class="text">${text}</p>
    <div class="quote-icon">
      <i class="fas fa-quote-right"></i>
    </div>
  </article>`;
    })
    .join("");

  nextBtn.addEventListener("click", () => slide("next"));
  prevBtn.addEventListener("click", () => slide("prev"));
};

const selectClass = (person, index) => {
  if (index === 0) return "active";
  if (index === 1) return "next";
  if (index === 2) return "prev";
};

const slide = (type) => {
  const active = getElement(".active");
  const next = getElement(".next");
  const prev = getElement(".prev");

  if (type === "next") cycleClass(active, next);
  if (type === "prev") cycleClass(active, prev);
};

const cycleClass = (prevActive, newActive) => {
  newActive.nextElementSibling
    ? newActive.nextElementSibling.classList.add("next")
    : newActive.parentElement.firstElementChild.classList.add("next");
  newActive.classList.add("active");
  newActive.previousElementSibling
    ? newActive.previousElementSibling.classList.add("prev")
    : newActive.parentElement.lastElementChild.classList.add("prev");

  //remove class to prev active element and its adjacent siblings
  prevActive.nextElementSibling
    ? prevActive.nextElementSibling.classList.remove("next")
    : prevActive.parentElement.firstElementChild.classList.remove("next");
  prevActive.classList.remove("active");
  prevActive.previousElementSibling
    ? prevActive.previousElementSibling.classList.remove("prev")
    : prevActive.parentElement.lastElementChild.classList.remove("prev");
};

document.addEventListener("DOMContentLoaded", initApp);
