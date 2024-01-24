const renderButtons = (container, list, currentPage) => {
  const buttons = list.map(
    (_, index) =>
      `<button class="page-btn ${
        currentPage === index ? "active-btn" : "null "
      }"> ${index + 1} </button>`
  );
  buttons.push(`<button class="next-btn">next</button>`);
  buttons.unshift(`<button class="prev-btn">prev</button>`);

  container.innerHTML = buttons.join("");
};
export default renderButtons;
