const rollingCount = (element) => {
  const value = parseInt(element.dataset.value);
  const increment = Math.ceil(value / 500);
  let initValue = 0;

  const increaseCount = setInterval(() => {
    initValue += increment;
    if (initValue > value) {
      element.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    element.textContent = initValue + "+";
  }, 1);
};

const initApp = () => {
  const valueElements = [...document.querySelectorAll(".number")];
  valueElements.forEach((element) => rollingCount(element));
};

document.addEventListener("DOMContentLoaded", initApp);
