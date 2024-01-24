import { getElement } from "./utils.js";

const initSideBar = () => {
  const sidebarToggle = getElement(".toggle-nav");
  const sidebarClose = getElement(".sidebar-close");
  const sidebar = getElement(".sidebar-overlay");

  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.add("show");
  });
  sidebarClose.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });
};

export default initSideBar;
