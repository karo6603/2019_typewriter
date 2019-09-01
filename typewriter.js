"use strict";
let text = document.querySelector("#typewriter").textContent;
let letters = text.split("");
let number = 0;

document.querySelector("#typewriter").textContent = "";

document.querySelector("button").addEventListener("click", start);

function start() {
  document.removeEventListener("click", start);

  document.querySelector("#typewriter").append(letters[number]);

  setTimeout(addNumber, Math.floor(Math.random() * 500));
}

function addNumber() {
  if (number < text.length - 1) {
    number++;

    start();
  }
}
