import initCart from "../cart/setupCart.js";
import initSideBar from "../toggleSidebar.js";

const initApp = () => {
  initSideBar();
  initCart();
};
document.addEventListener("DOMContentLoaded", initApp);
