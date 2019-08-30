"use strict";
let text = document.querySelector("#typewriter").textContent;
let letters = text.split("");
let number = 0;

document.querySelector("#typewriter").textContent = "";

document.addEventListener("click", start);

function start() {
  console.log(letters[number]);

  document.removeEventListener("click", start);

  document.querySelector("#typewriter").append(letters[number]);

  setTimeout(addNumber, Math.floor(Math.random() * 500));
}

function addNumber() {
  if (number < 43) {
    number++;

    start();
  }
}

// textcontent = "";
// append(text[0]);
// append(text[1]);
