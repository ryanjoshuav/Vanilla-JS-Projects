import renderProducts from "../renderProducts.js";
import { getElement } from "../utils.js";

const setupCompanyFilters = (productList) => {
  let companies = [
    "all",
    ...new Set(productList.map((product) => product.company).sort()),
  ];

  const container = getElement(".companies");
  container.innerHTML = companies
    .map((company) => `<button class="company-btn">${company}</button>`)
    .join("");

  container.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("company-btn")) {
      let filteredList =
        target.textContent === "all"
          ? productList
          : productList.filter(
              (product) => product.company === target.textContent
            );

      renderProducts(filteredList, getElement(".products-container", true));
    }
  });
};

export default setupCompanyFilters;
