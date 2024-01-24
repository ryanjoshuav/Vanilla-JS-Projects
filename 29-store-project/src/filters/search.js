import { getElement } from "../utils.js";
import renderProducts from "../renderProducts.js";

const setupSearch = (productList) => {
  const form = getElement(".input-form");
  const queryInput = getElement(".search-input");
  queryInput.value = "";

  form.addEventListener("keyup", () => {
    const productList = getFilteredList();
    const container = getElement(".products-container");
    const query = queryInput.value;

    if (query) {
      const queryResult = productList.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );

      queryResult.length < 1
        ? (container.innerHTML = `<h3 class="filter-error">
          sorry, no products matched your search</h3>`)
        : renderProducts(queryResult, container, true);
    } else {
      renderProducts(productList, container, true);
    }
  });
  form.addEventListener("submit", (event) => event.preventDefault());
};

export default setupSearch;
