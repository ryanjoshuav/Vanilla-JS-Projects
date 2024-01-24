const productsCenter = document.querySelector(".products-center");

const initApp = async () => {
  const products = await fetchProducts();
  renderProducts(products);
};

const fetchProducts = async () => {
  const productsUrl = "https://course-api.com/javascript-store-products";

  try {
    productsCenter.innerHTML = `<div class="loading"></div>`;
    const resp = await fetch(productsUrl);

    if (!resp.ok)
      productsCenter.innerHTML = `<p class="error">Can't find product list. Please try again</p>`;

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error.message);
    productsCenter.innerHTML = `<p class="error">Can't find product list. Please try again</p>`;
  }
};

const renderProducts = (products) => {
  const productList = products
    .map((product) => {
      const { name, price, image } = product.fields;

      return `<a href="product.html?id=${
        product.id
      }" class="single-product" id="${product.id}">
      <img src="${image[0].url}" alt="${name}" class="single-product-img img">
        <footer>
          <h5 class="name">${name}</h5>
          <span class="price">${formatPrice(price / 100)}</span>
        </footer>
      </a>`;
    })
    .join("");

  productsCenter.innerHTML = `<div class="products-container">
    ${productList}
  </div>`;
};

const formatPrice = (amount) => {
  return amount.toLocaleString("en-us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

document.addEventListener("DOMContentLoaded", initApp);
