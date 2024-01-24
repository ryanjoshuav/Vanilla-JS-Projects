const productContainer = document.querySelector(".product");

const initApp = async () => {
  const product = await fetchProduct();
  renderProduct(product);
};

const fetchProduct = async () => {
  const url = "https://course-api.com/javascript-store-single-product?id=";
  const query = window.location.search;
  const params = new URLSearchParams(query);

  const id = params.get("id");

  try {
    productContainer.innerHTML = `<div class="loading"></div>`;
    const resp = await fetch(`${url}${id}`);

    if (!resp.ok)
      productContainer.innerHTML = `<p class="error">Can't find product list. Please try again</p>`;

    return await resp.json();
  } catch (error) {
    console.log(error.message);
    productContainer.innerHTML = `<p class="error">Can't find product list. Please try again</p>`;
  }
};

const renderProduct = (product) => {
  const { name, price, image, company, colors, description } = product.fields;
  document.title = name.toUpperCase();

  const colorsSpan = colors
    .map(
      (color) =>
        `<span class="product-color" style="background-color: ${color};"></span>`
    )
    .join("");

  productContainer.innerHTML = `<div class="product-wrapper">
  <img src="${image[0].url}" alt="${name}" class="img" />
  <div class="product-info">
    <h3>${name}</h3>
    <h5>${company}</h5>
    <span>${formatPrice(price / 100)}</span>
    <div class="colors">
      ${colorsSpan}
    </div>
    <p>
     ${description}
    </p>
    <button class="btn">add to cart</button>
  </div>
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
