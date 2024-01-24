import renderProducts from "../renderProducts.js";
import { getElement } from "../utils.js";

const setupPriceFilter = (productList) => {
  const input = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  const prices = productList.map((product) => product.price);
  const max = Math.ceil(Math.max(...prices) / 100);

  input.max = max;
  input.value = max;
  priceValue.textContent = `Value: $${max}`;

  input.addEventListener("input", () => {
    const value = input.value;
    priceValue.textContent = `Value: $${value}`;
    const container = getElement(".products-container");
    const filteredList = productList.filter(
      (product) => product.price / 100 <= value
    );
    filteredList.length < 1
      ? (container.innerHTML = `<h3 class="filter-error">
        sorry, no products matched your search</h3>`)
      : renderProducts(filteredList, container, true);
  });
};

export default setupPriceFilter;
