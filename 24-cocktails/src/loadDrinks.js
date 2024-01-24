import fetchDrinks from "./fetchDrinks.js";
import renderDrinks from "./renderDrinks.js";

const loadDrinks = async (url) => {
  const data = await fetchDrinks(url);
  renderDrinks(data);
};

export default loadDrinks;
