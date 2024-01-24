const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
const title = document.querySelector(".section-title").querySelector("h1");

const fetchFollowers = async () => {
  try {
    const resp = await fetch(url);
    title.textContent = !resp.ok
      ? "Error: Couldn't fetch followers list"
      : "Pagination";

    return await resp.json();
  } catch (error) {
    console.log(error);
    title.textContent = "Error: Couldn't fetch followers list";
  }
};

export default fetchFollowers;
