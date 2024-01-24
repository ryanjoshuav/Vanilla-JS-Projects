const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
const results = document.querySelector(".results");

const initApp = () => {
  form.addEventListener("submit", handleSubmit);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const query = input.value;

  if (!query)
    results.innerHTML =
      '<div class="error"> please enter valid search term</div>';

  fetchPages(query);
};

const fetchPages = async (query) => {
  try {
    results.innerHTML = '<div class="loading"></div>';
    const resp = await fetch(`${url}${query}`);
    const data = await resp.json();
    const resultList = data.query.search;
    console.log(resultList);

    renderResults(resultList);
  } catch (error) {
    console.log(error);
    results.innerHTML = '<div class="error"> there was an error...</div>';
  }
};

const renderResults = (resultList) => {
  const links = resultList
    .map((result) => {
      const { title, snippet, pageid } = result;
      return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
            <h4>${title}</h4>
            <p>
              ${snippet}
            </p>
          </a>`;
    })
    .join("");

  results.innerHTML = `<div class="articles">
      ${links}
    </div>`;
};
document.addEventListener("DOMContentLoaded", initApp);
