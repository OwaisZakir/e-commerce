document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slider__slide"); // Select all the slide elements
  const dots = document.querySelectorAll(".slider__dot"); // Select all the navigation dots
  const slidesContainer = document.querySelector(".slider__slides"); // Select the container that holds all the slides
  let currentSlide = 0; // Initialize the current slide index
  let autoSlideInterval; // Variable to store the auto-slide interval ID

  // Function to change the slide
  function goToSlide(slideIndex) {
    // Animates the container of slides to show the desired slide
    gsap.to(slidesContainer, {
      xPercent: -slideIndex * 100, // Moves the container horizontally based on the index
      duration: 1.2, // Duration of the animation
      ease: "power2.inOut", // Easing for smooth transition
    });

    animateSlideContent(slideIndex); // Animate the content inside the slide
    updateDots(slideIndex); // Update the active dot based on the slide index
  }

  // Animation for content inside the slide (header, paragraph, and button)
  function animateSlideContent(slideIndex) {
    const slide = slides[slideIndex]; // Get the specific slide element
    const h1 = slide.querySelector("h1"); // Get the header element inside the slide
    const p = slide.querySelector("p"); // Get the paragraph element inside the slide
    const a = slide.querySelector("a"); // Get the anchor button element inside the slide

    // Smooth animation for header, paragraph, and button content (with delays)
    gsap.to(h1, { opacity: 1, y: 0, duration: 0.8 });
    gsap.to(p, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });
    gsap.to(a, { opacity: 1, y: 0, duration: 0.8, delay: 0.4 });
  }

  // Function to update the state of the navigation dots (highlight the active dot)
  function updateDots(slideIndex) {
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === slideIndex); // Toggle the "active" class for the current slide's dot
    });
  }

  // Function to start auto-sliding (changing slides automatically every 5 seconds)
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Set an interval to go to the next slide every 5 seconds
  }

  // Function to go to the next slide (loops back to the first slide if at the end)
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Increment the slide index and loop back to 0 after the last slide
    goToSlide(currentSlide); // Change the slide to the next one
  }

  // Add click event listeners on the dots for manual slide navigation
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = parseInt(dot.getAttribute("data-slide")); // Get the index of the clicked dot
      goToSlide(slideIndex); // Change the slide to the one corresponding to the clicked dot
      currentSlide = slideIndex; // Update the current slide index
    });
  });

  // Initialize the slider by showing the first slide
  goToSlide(currentSlide);
  startAutoSlide(); // Start the auto-slide functionality

  // Mouse slide functionality (dragging the slide)
  let isMouseDown = false; // To track if the mouse is pressed down
  let startX, scrollLeft; // Variables to track the starting position of the mouse and the scroll position

  // Mouse down event to start the dragging
  slidesContainer.addEventListener("mousedown", (e) => {
    isMouseDown = true; // Set isMouseDown to true to indicate the mouse is pressed
    startX = e.pageX - slidesContainer.offsetLeft; // Calculate the starting mouse position
    scrollLeft = slidesContainer.scrollLeft; // Get the current scroll position of the slides container
  });

  // Mouse leave event to stop dragging when mouse leaves the container
  slidesContainer.addEventListener("mouseleave", () => {
    isMouseDown = false; // Set isMouseDown to false when the mouse leaves
  });

  // Mouse up event to stop dragging when mouse button is released
  slidesContainer.addEventListener("mouseup", () => {
    isMouseDown = false; // Set isMouseDown to false when the mouse button is released
  });

  // Mouse move event to allow dragging functionality
  slidesContainer.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return; // Only run this if the mouse button is pressed
    e.preventDefault(); // Prevent default behavior of mouse move
    const x = e.pageX - slidesContainer.offsetLeft; // Calculate the current mouse position
    const walk = (x - startX) * 3; // Determine the distance to move based on mouse movement (multiplied by 3 for speed)
    slidesContainer.scrollLeft = scrollLeft - walk; // Move the container based on mouse movement
  });
});
// ==========================================================
//  =========== Products ==============
// ==========================================================

// GSAP Animations
window.addEventListener('DOMContentLoaded', () => {
  // Fade-in animation for the product cards
  gsap.to('.product-card', { opacity: 1, duration: 1, stagger: 0.3 });

  // Scale animation on hover for product images
  const productImage = document.querySelectorAll('.product-card-img');
  productImage.forEach(img => {
      img.addEventListener('mouseenter', () => {
          gsap.to(img, { scale: 1.05, duration: 0.3 });
      });
      img.addEventListener('mouseleave', () => {
          gsap.to(img, { scale: 1, duration: 0.3 });
      });
  });
});
