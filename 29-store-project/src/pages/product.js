//fetch
import fetchSingleProduct from "../fetchSingleProduct.js";

// init listeners
import initCart, { addToCart } from "../cart/setupCart.js";
import initSideBar from "../toggleSidebar.js";
//utils
import { formatPrice, getElement } from "../utils.js";

const initApp = async () => {
  const loading = getElement(".page-loading");
  const searchId = window.location.search;
  const product = await fetchSingleProduct(searchId);

  initSideBar();
  initCart();

  renderProductPage(product);

  loading.style.display = "none";
};

const renderProductPage = (product) => {
  const container = getElement(".single-product-center");
  if (product) {
    const {
      id,
      fields: { name, price, company, colors, image: img, description },
    } = product;
    const image = img[0].thumbnails.large.url;

    container.innerHTML = `
      <img
        src="${image}"
        alt="${name}"
        class="single-product-img img"
      />
      <article class="single-product-info">
        <div>
          <h2 class="single-product-title">${name}</h2>
          <p class="single-product-company">by ${company}</p>
          <p class="single-product-price">${formatPrice(price)}</p>
          <div class="single-product-colors"></div>
          <p class="single-product-desc">
            ${description}
          </p>
          <button class="addToCartBtn btn" data-id="${id}">add to cart</button>
        </div>
      </article>
    `;
    //set colors dom
    const colorContainer = getElement(".single-product-colors");
    colors.map((color) => {
      const span = document.createElement("span");
      span.classList.add("product-color");
      span.style.backgroundColor = color;
      colorContainer.appendChild(span);
    });

    // add add to cart btn listener
    const btn = getElement(".addToCartBtn");
    btn.addEventListener("click", () => addToCart(btn.dataset.id));
  } else {
    container.innerHTML = `
      <div>
        <h3 class="error">sorry, something went wrong</h3>
        <a href="index.html" class="btn">back home</a>
      </div> 
    `;
  }
};

document.addEventListener("DOMContentLoaded", initApp);
