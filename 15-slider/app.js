const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", () => {
  counter >= slides.length - 1 ? (counter = 0) : counter++;
  carousel();
});
prevBtn.addEventListener("click", () => {
  counter <= 0 ? (counter = slides.length - 1) : counter--;
  carousel();
});

const carousel = () => {
  console.log(counter);
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
