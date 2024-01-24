import debounce from "./src/debounce.js";
import getElement from "./src/getElement.js";
import loadDrinks from "./src/loadDrinks.js";
import searchDrinks from "./src/searchDrinks.js";

const initApp = async () => {
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
  //fetch drinks and render drinks then add event listener to drinks container
  loadDrinks(URL);
  //add searchForm listener
  const searchForm = getElement("search-form");
  searchForm.addEventListener("keyup", debounce(searchDrinks, 500));
  searchForm.addEventListener("submit", (e) => e.preventDefault());
};

document.addEventListener("DOMContentLoaded", initApp);
