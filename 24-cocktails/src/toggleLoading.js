import getElement from "./getElement.js";

const loading = getElement("loading");
export const startLoading = () => {
  loading.classList.remove("hide-loading");
};

export const stopLoading = () => {
  loading.classList.add("hide-loading");
};
