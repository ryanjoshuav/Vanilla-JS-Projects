import { getStorageItem, setStorageItem } from "./utils.js";

let products = getStorageItem("products") ?? [];

const setProductsList = (productsList) => {
  products = productsList.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });

  setStorageItem("products", products);
  return products;
};

const findProduct = (id) => {
  return products.find((product) => product.id === id);
};
export { setProductsList, findProduct };
