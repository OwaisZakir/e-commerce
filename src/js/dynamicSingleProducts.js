async function getSingleProduct(id) {
  try {
    let response = await fetch(`https://dummyjson.com/products/${id}`);
    let data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
window.onload = function () {
  let productId = localStorage.getItem("product_id");
  let data = getSingleProduct(productId);
  data
    .then((productDetails) => {
      document.getElementById(
        "pageTitle"
      ).textContent = `${productDetails.title} | By Owais Zakir`;
      let productHolder = document.querySelector("#productDetailHolder");
      productHolder.innerHTML += `
       <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-5 mb-4 mb-lg-0 ">
            <div class="product-image">
              <img
                src="${productDetails.thumbnail}"
                class="img-fluid"
                alt="${productDetails.title}"
              />
            </div>
             <button class="btn btn-primary btn-lg mt-4">Add to Cart</button>

          </div>

          <div class="col-md-6 col-lg-7">
            <div class="product-details">
              <h1 class="product-title">${productDetails.title}</h1>
              <p class="product-description">
                ${productDetails.description}
              </p>
              <p class="product-price">Price: <span>${productDetails.price}</span></p>
              <p class="product-category"><strong>Category:</strong> ${productDetails.category}</p>
              <p class="product-brand">
                <strong>Brand:</strong> ${productDetails.brand}
              </p>
              <p class="product-sku"><strong>SKU:</strong> ${productDetails.sku}</p>
              <p class="product-stock"><strong>Stock:</strong> ${productDetails.stock} available</p>
              <p class="product-rating"><strong>Rating:</strong> ${productDetails.rating}</p>
              <div class="product-tags">
                <strong>Tags:</strong>
                <span class="badge bg-primary">Beauty</span>
                <span class="badge bg-primary">Eyeshadow</span>
              </div>
              <p class="product-warranty">
                <strong>Warranty:</strong> 1 year warranty
              </p>
              <p class="product-shipping">
                <strong>Shipping:</strong> ${productDetails.warrantyInformation}
              </p>
              <p class="product-availability">
                <strong>Availability:</strong> ${productDetails.availabilityStatus}
              </p>
              <p class="product-return-policy">
                <strong>Return Policy:</strong> ${productDetails.returnPolicy}
              </p>
            </div>
          </div>
        </div>
      `;
      //   ====================
      // Add event listener for the "Add to Cart" button
      document.querySelector(".btn-primary").addEventListener("click", () => {
        console.log("Button clicked");
        alert(`${productDetails.title} Have Added to Cart`);
      });

      //   localStorage.removeItem("product_id");
    })
    .catch((err) => {
      console.log(err);
    });
};

// window.addEventListener("DOMContentLoaded", () => {
//   // Fade-in animation for the product image
//   gsap.fromTo(
//     ".product-image img",
//     { opacity: 0, y: 20 },
//     { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//   );

//   // Fade-in animation for the product details
//   gsap.fromTo(
//     ".product-details",
//     { opacity: 0, x: -20 },
//     { opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 0.5 }
//   );

//   // Hover effect for the product image
//   const productImage = document.querySelector(".product-image img");
//   productImage.addEventListener("mouseenter", () => {
//     gsap.to(productImage, { scale: 1.1, duration: 0.3, ease: "power1.inOut" });
//   });
//   productImage.addEventListener("mouseleave", () => {
//     gsap.to(productImage, { scale: 1, duration: 0.3, ease: "power1.inOut" });
//   });

//   // Fade-in animation for reviews with stagger
//   gsap.fromTo(
//     ".review",
//     { opacity: 0, y: 20 },
//     {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       ease: "power2.out",
//       stagger: 0.2,
//       delay: 1,
//     }
//   );
// });
