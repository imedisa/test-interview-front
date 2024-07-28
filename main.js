import "./assets/style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import Alpine from 'alpinejs'

window.Alpine = Alpine
Alpine.start()

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

import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: ['alpinejs']
  }
})
