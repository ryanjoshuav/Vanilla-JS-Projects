import fetchUser from "./utils/fetchUser.js";
import getElement from "./utils/getElement.js";
import renderPerson from "./utils/renderPerson.js";

const initApp = () => {
  const btn = getElement("btn");
  getRandomUser();
  btn.addEventListener("click", getRandomUser);
};

const getRandomUser = async () => {
  const person = await fetchUser();
  renderPerson(person);
};

document.addEventListener("DOMContentLoaded", initApp);
