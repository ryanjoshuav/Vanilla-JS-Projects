import { articles } from "./data.js";

const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark-mode");
};

const renderArticles = (element) => {
  element.innerHTML = articles
    .map((article) => {
      const { title, date, length, snippet } = article;
      const formattedDate = date.toLocaleString("en-PH", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      return `<article class="post">
    <h2 class="post-title">${title}</h2>
      <div class="post-info">
        <span>${formattedDate}</span>
        <span>${length} min read</span>
      </div>
      <p>${snippet}</p>
    </article>`;
    })
    .join("");
};

const initApp = () => {
  const articlesContainer = document.querySelector(".articles");
  const toggle = document.querySelector(".btn");
  toggle.addEventListener("click", toggleDarkMode);
  renderArticles(articlesContainer);
};

document.addEventListener("DOMContentLoaded", initApp);
