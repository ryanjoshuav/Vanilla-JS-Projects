const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
};

const getStorageItem = (key) => {
  const item = JSON.parse(localStorage.getItem(key));
  return item ? item : [];
};

const setStorageItem = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export { getElement, formatPrice, getStorageItem, setStorageItem };
