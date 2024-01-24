import { addToCart } from "./cart/setupCart.js";
import { formatPrice } from "./utils.js";

const renderProducts = (productList, container, filtered) => {
  container.innerHTML = productList
    .map((product) => {
      const { id, name, price, image } = product;
      return `
    <article class="product">
      <div class="product-container">
        <img src="${image}" class="product-img img" alt="${name}" />
        
        <div class="product-icons">
          <a href="product.html?id=${id}" class="product-icon">
            <i class="fas fa-search"></i>
          </a>
          <button class="product-cart-btn product-icon" data-id="${id}">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <footer>
        <p class="product-name">${name}</p>
        <h4 class="product-price">${formatPrice(price)}</h4>
      </footer>
    </article>`;
    })
    .join("");

  if (filtered) return;

  container.addEventListener("click", handleClick);
};

const handleClick = (event) => {
  const button = event.target.closest("button.product-cart-btn");
  if (button) addToCart(button.dataset.id);
};

export default renderProducts;
