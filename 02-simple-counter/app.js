const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("decrease")) count--;
    if (btn.classList.contains("reset")) count = 0;
    if (btn.classList.contains("increase")) count++;

    count < 1 && (value.style.color = "red");
    count > 1 && (value.style.color = "green");

    value.textContent = count;
  });
});
