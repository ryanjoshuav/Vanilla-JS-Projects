import getElement from "./getElement.js";
import setSingleDrink from "./setSingleDrink.js";
import { stopLoading } from "./toggleLoading.js";

const renderDrinks = (drinks) => {
  const drinksContainer = getElement("section-center");
  const title = getElement("title");

  stopLoading();
  if (!drinks.drinks) {
    title.textContent = "no drink/s matched your search";
    drinksContainer.textContent = null;
    return;
  }

  title.textContent = "";
  console.log(drinks.drinks);
  drinksContainer.innerHTML = drinks.drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: img } = drink;
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${img}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");

  drinksContainer.addEventListener("click", setSingleDrink);
};
export default renderDrinks;
