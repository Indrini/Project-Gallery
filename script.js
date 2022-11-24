"use strict";
const buttons = document.querySelectorAll(".btn");
const image = document.querySelectorAll(".project-img");
const fullDescription = document.querySelectorAll(".full-description");
const description = document.querySelectorAll(".description");
const closeButtons = document.querySelectorAll(".close-btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    image[i].classList.toggle("hidden");
    fullDescription[i].classList.toggle("hidden");
    buttons[i].classList.toggle("hidden");
    description[i].classList.toggle("hidden");
    closeButtons[i].classList.toggle("hidden");
  });
}

for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function () {
    image[i].classList.toggle("hidden");
    fullDescription[i].classList.toggle("hidden");
    buttons[i].classList.toggle("hidden");
    description[i].classList.toggle("hidden");
    closeButtons[i].classList.toggle("hidden");
  });
}
