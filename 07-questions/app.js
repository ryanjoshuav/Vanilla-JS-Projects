//using selectors inside the element
// traversing the dom
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    console.log("clicked");
    questions.forEach((item) => {
      item !== question && item.classList.remove("show-text");
    });
    question.classList.toggle("show-text");
  });
});
