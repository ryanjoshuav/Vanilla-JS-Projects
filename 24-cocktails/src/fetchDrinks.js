import { startLoading } from "./toggleLoading.js";

const fetchDrinks = async (url) => {
  startLoading();
  try {
    const resp = await fetch(url);
    if (!resp.ok) console.error("Error while fetching drinks: Try again");

    return await resp.json();
  } catch (error) {
    console.log(error);
    console.error("Error while fetching random user: Try again");
  }
};
export default fetchDrinks;
