// fetch and set to localStorage
import fetchProducts from "../fetchProducts.js";
import { setProductsList } from "../productsList.js";

//setup listeners
import initCart from "../cart/setupCart.js";
import initSideBar from "../toggleSidebar.js";

//setup filters
import setupSearch from "../filters/search.js";
import setupCompanyFilters from "../filters/companies.js";
import setupPriceFilter from "../filters/price.js";

//utils
import { getElement } from "../utils.js";

//render
import renderProducts from "../renderProducts.js";

const initApp = async () => {
  const loading = getElement(".page-loading");

  const data = await fetchProducts();
  const products = setProductsList(data);

  initSideBar();
  initCart();
  renderProducts(products, getElement(".products-container"));

  loading.style.display = "none";

  setupSearch(products);
  setupCompanyFilters(products);
  setupPriceFilter(products);
};

document.addEventListener("DOMContentLoaded", initApp);
