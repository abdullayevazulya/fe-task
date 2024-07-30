const productss = JSON.parse(localStorage.getItem('favorites'))
const productsWrapper = document.querySelector(".products-wrapper");
console.log(productss);
let productsHTML =""

productss.forEach((product) => {
  let stars = "";
  const rating = Math.round(product.rating);

  for (let i = 1; i <= rating; i++) {
    stars += `<i class="fa-solid fa-star"></i>`;
  }

  productsHTML += `<div class="product">
    <div class="product-image">
      <img src="${product.thumbnail}" alt="" />
    </div>

    <div class="product-body">
      <a href="./pages/singleProduct.html?id=${product.id}" class="product-title">${product.title}</a>

      <p class="product-rating">${stars}</p>

      <p class="product-desc">${product.description}</p>

      <p class="product-price">$${product.price}</p>

      <button class="add-favorite" onclick="addToCart(${product.id})">
        <i class="fa-regular fa-heart"></i>
      </button>
    </div>
  </div>`;
});

productsWrapper.innerHTML = productsHTML;



