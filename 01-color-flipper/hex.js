const initApp = () => {
  const btn = document.getElementById("btn");
  const color = document.querySelector(".color");

  const changeColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    //generate a hex color
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    console.log(hexColor);

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
  };

  btn.addEventListener("click", changeColor);
};
document.addEventListener("DOMContentLoaded", initApp);
