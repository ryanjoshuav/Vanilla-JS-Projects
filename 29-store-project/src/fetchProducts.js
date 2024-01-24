const allProductsUrl = "https://course-api.com/javascript-store-products";

const fetchProducts = async () => {
  try {
    const resp = await fetch(allProductsUrl);

    if (resp.ok) return resp.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;
