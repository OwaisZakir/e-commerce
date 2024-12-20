// let postApi = "https://dummyjson.com/products";

// async function posts() {
//   let response = await fetch(postApi);
//   return response.json();
// }
// let data = posts();

// data
//   .then((posts) => {
//     let {products} = posts;
//     products.map((product,index) => {
//       console.log(product);
//     })
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });


// GSAP Animations for product cards (Load Animation)
gsap.from(".product-card", {
  opacity: 0,
  y: 100,
  duration: 1.2,
  ease: "easeInOut",
  stagger: 0.4, // Spread out the animations for each card
});

// Hover effect on the product cards
document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("mouseenter", function () {
    gsap.to(card, {
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out",  // Smooth easing for the scale
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",  // Add shadow for depth
    });
  });

  card.addEventListener("mouseleave", function () {
    gsap.to(card, {
      scale: 1,
      duration: 0.4,
      ease: "power2.in",  // Smooth easing back to original scale
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",  // Subtle shadow on leave
    });
  });
});

// Button hover effects
const buttons = document.querySelectorAll('.cta-button, .details-button, .plus-button');
buttons.forEach(button => {
  button.addEventListener("mouseenter", function () {
    gsap.to(button, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",  // Smooth ease-in animation
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",  // Add shadow effect on hover
    });
  });

  button.addEventListener("mouseleave", function () {
    gsap.to(button, {
      scale: 1,
      duration: 0.3,
      ease: "power2.in",  // Smooth ease-out animation
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  // Subtle shadow when mouse leaves
    });
  });
});

// Button click animations
document.querySelectorAll(".cta-button").forEach(button => {
  button.addEventListener("click", function () {
    gsap.to(button, {
      scale: 0.95,
      duration: 0.2,
      ease: "power1.in",  // Smooth click effect with scale down
    });
    setTimeout(() => {
      gsap.to(button, {
        scale: 1,
        duration: 0.2,
        ease: "power1.out",  // Smooth restore after click
      });
      alert("Product added to cart!");
    }, 200);
  });
});

// Plus button click animation (For adding to cart)
document.querySelectorAll(".plus-button").forEach(button => {
  button.addEventListener("click", function () {
    gsap.to(button, {
      rotation: 360,
      duration: 0.5,
      ease: "power2.out",  // Smooth rotation effect
    });
    alert("Product added to cart!");
  });
});

// Info button hover effects
document.querySelectorAll(".details-button").forEach(button => {
  button.addEventListener("mouseenter", function () {
    gsap.to(button, {
      rotation: 15,
      duration: 0.3,
      ease: "power1.out",  // Small tilt effect on hover
      scale: 1.1,
    });
  });

  button.addEventListener("mouseleave", function () {
    gsap.to(button, {
      rotation: 0,
      scale: 1,
      duration: 0.3,
      ease: "power1.in",  // Smooth rotation reset and scale back
    });
  });
});
  