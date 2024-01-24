const tabButtons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

// const handleTabBtnClick = (btn) => {
//   const id = btn.dataset.id;

//   contents.forEach((content) => {
//     content.id !== id
//       ? content.classList.remove("active")
//       : content.classList.add("active");
//   });

//   tabButtons.forEach((btn) => {
//     btn.dataset.id !== id
//       ? btn.classList.remove("active")
//       : btn.classList.add("active");
//   });
// };

// tabButtons.forEach((btn) => {
//   btn.addEventListener("click", () => handleTabBtnClick(btn));
// });

const btnContainer = document.querySelector(".btn-container");

btnContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.classList.contains("tab-btn")) return;

  const id = target.dataset.id;

  contents.forEach((content) => {
    content.classList.toggle("active", content.id === id);
  });

  tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.id === id);
  });
});
