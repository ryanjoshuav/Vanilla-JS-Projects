import fetchFollowers from "./utils/fetchFollowers.js";
import paginateFollowers from "./utils/paginateFollowers.js";
import renderButtons from "./utils/renderButtons.js";
import renderFollowers from "./utils/renderFollowers.js";

const buttonContainer = [...document.querySelectorAll(".btn-container")];

let paginatedFollowers = [];
let currentPage = 0;

const renderPage = () => {
  renderFollowers(paginatedFollowers[currentPage]);
  buttonContainer.forEach((container) =>
    renderButtons(container, paginatedFollowers, currentPage)
  );
};

const initApp = async () => {
  const followers = await fetchFollowers();
  paginatedFollowers = paginateFollowers(followers);
  console.log(paginatedFollowers);
  renderPage(paginatedFollowers);
};

const handlePageBtnClick = (event) => {
  const target = event.target;
  if (target.classList.contains("btn-container")) return;
  if (target.classList.contains("page-btn"))
    currentPage = parseInt(target.textContent) - 1;
  if (target.classList.contains("next-btn")) currentPage++;
  if (target.classList.contains("prev-btn")) currentPage--;

  renderPage();
};

buttonContainer.forEach((container) =>
  container.addEventListener("click", handlePageBtnClick)
);
window.addEventListener("load", initApp);
