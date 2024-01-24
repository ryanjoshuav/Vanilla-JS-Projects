import getElement from "./getElement.js";
import setActiveClass from "./setActiveClass.js";

const iconClick = (event, person) => {
  // const { name, email, contact, age, address, img } = person;
  const target = event.target;
  const title = getElement("user-title");
  const value = getElement("user-value");
  const btn = target.closest("button.icon");
  const label = btn.dataset.label;

  title.textContent = `My ${label} is`;
  value.innerHTML = person[label];

  setActiveClass(btn);
};

export default iconClick;
