import getElement from "./getElement.js";
import iconClick from "./iconClick.js";
import setActiveClass from "./setActiveClass.js";

const renderPerson = (person) => {
  const { name, img } = person;
  const btnContainer = getElement("values-list");
  const nameBtn = getElement("icon");
  setActiveClass(nameBtn);

  const imgEl = getElement("user-img");
  imgEl.src = img;
  const title = getElement("user-title");
  const value = getElement("user-value");
  title.textContent = "My name is";
  value.textContent = name;

  btnContainer.addEventListener("click", (e) => iconClick(e, person));
};

export default renderPerson;
