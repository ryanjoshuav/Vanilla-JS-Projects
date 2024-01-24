import getElement from "./getElement.js";

const setSingleDrink = (event) => {
  // event.preventDefault();

  const id = event.target.closest(".cocktail")?.dataset.id;
  if (id) localStorage.setItem("drink", id);
};
export default setSingleDrink;
