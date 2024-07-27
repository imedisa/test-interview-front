import "./assets/style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();
import Splide from 'alpine-splide'

Alpine.data('Splide', Splide)

// Alpine.start()

document.addEventListener("alpine:init", () => {
  Alpine.data("imageSlider", () => ({
    currentIndex: 0,
    images: [
      { src: "assets/images/project1.jpg", alt: "Project 1" },
      { src: "assets/images/project2.jpg", alt: "Project 2" },
      { src: "assets/images/project3.jpg", alt: "Project 3" },
      // Add more images as needed
    ],
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  }));
});

function validateForm() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const budget = document.getElementById("budget").value;
  const message = document.getElementById("message").value;
  // Additional custom validations
  if (fullName.trim().split(" ").length < 2) {
    alert("Please enter both your first and last name.");
    return false;
  }
  if (isNaN(parseFloat(budget)) || parseFloat(budget) <= 0) {
    alert("Please enter a valid budget amount.");
    return false;
  }
  return true;
}
