// ==================== Handle Login Page

let token = localStorage.getItem("access_token");
if (token) {
  window.location.href = "../../index.html";
} else {
  document
    .getElementById("loginForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      console.log("Loading ...");

      let response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // username: "emilys",
          // password: "emilyspass",
          username: username,
          password: password,
          expiresInMins: 30, // optional, defaults to 60
        }),
      })
        .then((res) => res.json())
        .then((token) => {
          return token;
        })
        .catch((error) => {
          return error;
        });

      let { accessToken } = response;
      let token = localStorage.getItem("access_token");

      if (accessToken) {
        localStorage.setItem("access_token", accessToken);
        setTimeout(() => {
          window.location.href = "../../index.html";
        }, 500);
      } else {
        alert("Invalid username or password.");
        return;
      }
      console.log("Completed");
    });
}

// ===================== Other Code Like Animation And More

// Image array and image element
const images = [
  "../assets/images/login/illustration1.svg",
  "../assets/images/login/illustration2.svg",
  "../assets/images/login/illustration3.svg",
  "../assets/images/login/illustration4.svg",
];

let currentImageIndex = 0;
const imageElement = document.querySelector(".login-image img");

// Function to change image with smooth animation
function changeImage() {
  gsap.to(imageElement, {
    opacity: 0,
    scale: 0.95,
    duration: 0.5,
    onComplete: () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      imageElement.src = images[currentImageIndex];
      gsap.fromTo(
        imageElement,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5 }
      );
    },
  });
}

// Change image every 5 seconds
setInterval(changeImage, 5000);

// GSAP animations
gsap.from(".login-container", {
  duration: 1,
  opacity: 0,
  ease: "power2.inOut",
});
gsap.from(".login-image img", {
  duration: 1,
  x: -200,
  opacity: 0,
  ease: "power2.out",
  delay: 0.5,
});
gsap.from(".login-form", {
  duration: 1,
  x: 200,
  opacity: 0,
  ease: "power2.out",
  delay: 0.5,
});

// Hover effects using GSAP
const inputs = document.querySelectorAll(".form-group input");
inputs.forEach((input) => {
  input.addEventListener("mouseenter", () => {
    gsap.to(input, { duration: 0.3, scale: 1.05 });
  });
  input.addEventListener("mouseleave", () => {
    gsap.to(input, { duration: 0.3, scale: 1 });
  });
});

const button = document.querySelector("button");
button.addEventListener("mouseenter", () => {
  gsap.to(button, { duration: 0.3, scale: 1.05 });
});
button.addEventListener("mouseleave", () => {
  gsap.to(button, { duration: 0.3, scale: 1 });
});

// Adding animation to login illustration
gsap.to(".login-image img", {
  duration: 2,
  y: 20,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
});
