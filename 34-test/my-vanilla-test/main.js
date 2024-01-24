import "./style.css";
import "./scss/style.scss";

const fruits = ["apple", "banana", "apple", "cherry"];
const snacks = ["chocolate", "ice cream"];
snacks

const foods = ["all", ...new Set([...fruits, ...snacks])];
console.log(
  foods.map((food) => {
    return `<div>${food}</div>`;
  })
);

document.querySelector("#app").innerHTML = foods
  .map((food) => {
    return `<div>${food}</div>`;
  })
  .join("");
