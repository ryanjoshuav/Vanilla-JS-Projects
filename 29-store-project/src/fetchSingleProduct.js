const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";

const fetchSingleProduct = async (searchId) => {
  try {
    const resp = await fetch(`${singleProductUrl}${searchId}`);

    if (resp.ok) return resp.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetchSingleProduct;
