let postApi = "https://dummyjson.com/products";
let getProductBody = document.querySelector("#products-holder");
async function posts() {
  let response = await fetch(postApi);
  return response.json();
}
let data = posts();

data
  .then((posts) => {
    let { products } = posts;
    products.map((product, index) => {
        console.log(product);
      getProductBody.innerHTML += `
      
<div class="col-sm-12 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
  <div class="product-card position-relative">
    <div class="product-actions">
      <button class="plus-button">
        <i class="fas fa-cart-plus"></i>
      </button>
      <button class="details-button">
        <i class="fas fa-info-circle"></i>
      </button>
    </div>
    <img
      src="${product.thumbnail}"
      alt="Green Chili Pepper"
      class="product-image"
    />
    <h5 class="product-title">${product.title}</h5>
    <p class="product-description">
    ${product.description}
    </p>
    <p class="product-price">${product.price}</p>
    <button class="cta-button">Add to Cart</button>
  </div>
</div>;
      `;
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// <div class="col-sm-12 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
//   <div class="product-card position-relative">
//     <div class="product-actions">
//       <button class="plus-button">
//         <i class="fas fa-cart-plus"></i>
//       </button>
//       <button class="details-button">
//         <i class="fas fa-info-circle"></i>
//       </button>
//     </div>
//     <img
//       src="https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png"
//       alt="Green Chili Pepper"
//       class="product-image"
//     />
//     <h5 class="product-title">Green Chili Pepper</h5>
//     <p class="product-description">
//       Fresh and spicy, perfect for adding heat to your meals.
//     </p>
//     <p class="product-price">$2.99</p>
//     <button class="cta-button">Add to Cart</button>
//   </div>
// </div>;
