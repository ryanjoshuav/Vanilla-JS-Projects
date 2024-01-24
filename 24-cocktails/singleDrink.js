import fetchDrinks from "../final/src/fetchDrinks.js";
import renderSingleDrink from "./src/renderSingleDrink.js";

const initApp = async () => {
  const id = localStorage.getItem("drink");
  if (!id) window.location.replace("index.html");
  console.log(id);
  const drink = await fetchDrinks(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  renderSingleDrink(drink);
};

document.addEventListener("DOMContentLoaded", initApp);
