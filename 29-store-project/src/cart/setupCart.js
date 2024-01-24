// import
import { findProduct } from "../productsList.js";
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";

let cart;
export const addToCart = (id) => {
  const item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    let product = findProduct(id);
    //add item to the cart
    product = { ...product, amount: 1 };
    cart = [...cart, product];

    renderCartItem(product);
  } else {
    increaseCartItemAmount(id);
  }

  // render cart totals
  renderTotalItemCount(cart);
  renderTotalPrice(cart);
  setStorageItem("cart", cart);

  // // optional: open overlay
  getElement(".cart-overlay").classList.add("show");
};

const renderTotalItemCount = () => {
  getElement(".cart-item-count").textContent = cart.reduce(
    (total, cartItem) => (total += cartItem.amount),
    0
  );
};

const renderTotalPrice = () => {
  const container = getElement(".cart-total");
  const totalPrice = cart.reduce(
    (total, cartItem) => (total += cartItem.price * cartItem.amount),
    0
  );

  container.textContent = `Total: ${formatPrice(totalPrice)}`;
};

const renderCartItems = () => {
  cart.forEach((cartItem) => renderCartItem(cartItem));
};

const renderCartItem = (cartItem) => {
  const container = getElement(".cart-items");
  const { id, name, price, image, amount } = cartItem;
  container.innerHTML += `
    <article class="cart-item" data-id="${id}">
      <img src="${image}"
        class="cart-item-img"
        alt="${name}"
      />  
      <div>
        <h4 class="cart-item-name">${name}</h4>
        <p class="cart-item-price">${formatPrice(price)}</p>
        <button class="cart-item-remove-btn" data-id="${id}">remove</button>
      </div>
    
      <div>
        <button class="cart-item-increase-btn" data-id="${id}">
          <i class="fas fa-chevron-up"></i>
        </button>
        <p class="cart-item-amount" data-id="${id}">${amount}</p>
        <button class="cart-item-decrease-btn" data-id="${id}">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </article>
  `;
};

const increaseCartItemAmount = (id) => {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });

  // increase amount in the dom
  updateCartCount(id, newAmount);
};

const decreaseCartItemAmount = (id) => {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  if (newAmount === 0) {
    removeFromCart(id);
    return;
  }

  // decrease amount in the dom
  updateCartCount(id, newAmount);
};

const updateCartCount = (id, newAmount) => {
  const cartItemsElements = [...document.querySelectorAll(".cart-item-amount")];
  const cartItemToUpdate = cartItemsElements.find(
    (element) => element.dataset.id === id
  );

  newAmount
    ? (cartItemToUpdate.textContent = newAmount)
    : cartItemToUpdate.closest("article.cart-item").remove();
};

const removeFromCart = (id) => {
  cart = cart.filter((cartItem) => cartItem.id !== id);
  updateCartCount(id);
};

const setupCartFunctionality = () => {
  const container = getElement(".cart-items");
  container.addEventListener("click", (event) => {
    const target = event.target;
    if (target.closest("button.cart-item-remove-btn")) {
      removeFromCart(target.closest("button.cart-item-remove-btn").dataset.id);
    } else if (target.closest("button.cart-item-increase-btn")) {
      increaseCartItemAmount(
        target.closest("button.cart-item-increase-btn").dataset.id
      );
    } else if (target.closest("button.cart-item-decrease-btn")) {
      decreaseCartItemAmount(
        target.closest("button.cart-item-decrease-btn").dataset.id
      );
    } else return;

    renderTotalItemCount(cart);
    renderTotalPrice(cart);
    setStorageItem("cart", cart);
    console.log(target);
  });
};

const initCartTogglers = () => {
  const cartToggle = getElement(".toggle-cart");
  const cartClose = getElement(".cart-close");
  const overlay = getElement(".cart-overlay");

  cartToggle.addEventListener("click", () => {
    overlay.classList.add("show");
  });
  cartClose.addEventListener("click", () => {
    overlay.classList.remove("show");
  });
  document.addEventListener("click", (event) => {
    if (event.target === overlay) overlay.classList.remove("show");
  });
};

const initCart = () => {
  cart = getStorageItem("cart");
  initCartTogglers();
  renderTotalItemCount();
  renderTotalPrice();

  //render each cart item to cart overlay
  renderCartItems();

  //add eventListeners
  setupCartFunctionality();
};

export default initCart;
