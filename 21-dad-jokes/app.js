const fetchJoke = async () => {
  const result = document.querySelector(".result");
  result.textContent = "Loading...";
  url = "https://icanhazdadjoke.com/";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });

    !response.ok && console.log("fetching error");
    const data = await response.json();
    console.log(data);
    result.textContent = data.joke;
  } catch (error) {
    console.log(error.message);
    result.textContent = "There was an error...";
  }
};

const initApp = () => {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", fetchJoke);

  fetchJoke();
};

document.addEventListener("DOMContentLoaded", initApp);
