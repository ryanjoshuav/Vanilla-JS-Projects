import fetchDrinks from "./fetchDrinks.js";
import loadDrinks from "./loadDrinks.js";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const searchDrinks = () => {
  let value = document.querySelector("[name = 'drink']").value;
  if (!value) value = "a";
  loadDrinks(`${BASE_URL}${value}`);
};
export default searchDrinks;
