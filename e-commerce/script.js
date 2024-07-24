import { products } from "./data.js";

const productsWrapper = document.querySelector(".products-wrapper");
// const a = document.querySelectorAll("a");
// const nodelistArray = Array.from(a);

products.forEach((value, index, array) => {
  productsWrapper.innerHTML += `
            <div id="${index + 1}" class="product">
                <div class="product-image">
                  <img
                    src="${value.thumbnail}"
                    alt="${value.title}"
                  />
                </div>

                <div class="product-body">
                  <p class="product-title">${value.title}</p>

                  <p class="product-rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </p>

                  <p class="product-desc">${value.description}</p>
                  <p class="product-price">$${value.price}</p>

                  <button class="add-favorite">
                    <i class="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>
`;
});
