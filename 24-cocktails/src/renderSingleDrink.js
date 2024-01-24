import getElement from "./getElement.js";
import { stopLoading } from "./toggleLoading.js";

const renderSingleDrink = ({ drinks }) => {
  stopLoading();

  const drink = drinks[0];

  const { strDrink: name, strDrinkThumb: img, strInstructions: desc } = drink;
  const ingredients = [];
  for (let i = 1; i < 15; i++) {
    const strIngredient = `strIngredient${i}`;
    if (drink[strIngredient]) ingredients.push(drink[strIngredient]);
  }

  const imgEl = getElement("drink-img");
  const nameEl = getElement("drink-name");
  const descEl = getElement("drink-desc");
  const ingredientList = getElement("drink-ingredients");

  imgEl.src = img;
  nameEl.textContent = name;
  descEl.textContent = desc;
  ingredientList.innerHTML = ingredients
    .map((item) => `<li><i class="far fa-check-square"></i>${item}</li>`)
    .join("");
};
export default renderSingleDrink;
