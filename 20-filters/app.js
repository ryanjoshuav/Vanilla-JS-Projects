import { products } from "./products.js";

let productList = products;

const renderProducts = (productList = products) => {
  const productsContainer = document.querySelector(".products-container");

  productsContainer.innerHTML =
    productList.length < 1
      ? `<h6>Sorry, no products matched your search</h6>`
      : productList
          .map((product) => {
            const { id, title, image, price } = product;
            return `<article class="product">
        <img src="${image}" alt="${title}" data-id="${id}" class="product-img img" />
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">$${price}</span>
        </footer>
      </article>`;
          })
          .join("");
};

const renderFilters = () => {
  const filterContainer = document.querySelector(".companies");

  const companies = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ].sort();

  filterContainer.innerHTML = companies
    .map(
      (company) =>
        `<button class="company-btn ${
          company === "all" ? "selected" : ""
        }">${company}</button>`
    )
    .join("");

  filterContainer.addEventListener("click", filterByCompany);
};

const selectFilter = (target) => {
  const companyFilters = [...document.querySelectorAll(".company-btn")];

  companyFilters.map((btn) => {
    btn === target
      ? btn.classList.add("selected")
      : btn.classList.remove("selected");
  });
};

const filterByCompany = (event) => {
  const target = event.target;

  let filteredProducts;

  if (target.classList.contains("company-btn")) {
    filteredProducts =
      target.textContent === "all"
        ? products
        : products.filter((product) => product.company === target.textContent);
  } else {
    return;
  }
  selectFilter(target);
  const searchInput = document.querySelector(".search-input");
  searchInput.value = "";

  productList = filteredProducts;
  renderProducts(filteredProducts);
};

const searchItem = () => {
  const searchInput = document.querySelector(".search-input");
  const inputValue = searchInput.value;
  console.log(inputValue);
  const filteredProducts = productList.filter((product) =>
    product.title.toLowerCase().includes(inputValue)
  );

  renderProducts(filteredProducts);
};

const initApp = () => {
  const form = document.querySelector(".input-form");

  renderProducts();
  renderFilters();

  form.addEventListener("submit", (e) => e.preventDefault());
  form.addEventListener("keyup", searchItem);
};
document.addEventListener("DOMContentLoaded", initApp);
