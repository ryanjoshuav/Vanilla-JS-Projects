import getElement from "./getElement.js";

const setActiveClass = (element) => {
  getElement("active").classList.remove("active");
  element.classList.add("active");
};
export default setActiveClass;
