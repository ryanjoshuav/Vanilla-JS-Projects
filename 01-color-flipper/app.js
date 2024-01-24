const initApp = () => {
  const btn = document.getElementById("btn");
  const color = document.querySelector(".color");

  const changeColor = () => {
    const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
    //get random number (0-3)
    const randomNumber = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  };

  btn.addEventListener("click", changeColor);
};

document.addEventListener("DOMContentLoaded", initApp);
