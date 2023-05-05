"use strict";

const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  close = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

//================== progress bar ==========
const counters = document.querySelectorAll(".level-value"),
  lines = document.querySelectorAll(".skills-progress__bar span");
counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
