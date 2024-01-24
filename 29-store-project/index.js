import fetchProducts from "./src/fetchProducts.js";
import { setProductsList } from "./src/productsList.js";
//set up events
import initCart from "./src/cart/setupCart.js";
import initSideBar from "./src/toggleSidebar.js";
//utils
import { getElement } from "./src/utils.js";
//render
import renderProducts from "./src/renderProducts.js";

const initApp = async () => {
  const data = await fetchProducts();
  const products = setProductsList(data);

  initSideBar();
  initCart();
  displayFeatured(products);
};

const displayFeatured = (list) => {
  const featuredProducts = list.filter((product) => product.featured === true);
  renderProducts(featuredProducts, getElement(".featured-center"));
};

document.addEventListener("DOMContentLoaded", initApp);
