'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor);
const colors = ["red", "blue", "yellow", "green", "white", "orange", "purple", "black", "pink"];
const boxes = ["🟥", "🟦", "🟨", "🟩", "⬜️", "🟧", "🟪", "⬛️", "💌"];
const body = document.getElementsByTagName("body")[0];
const box = document.getElementsByClassName("colorBox")[0];

function changeColor() {
  const random = Math.floor(Math.random() * (colors.length));
  const color = colors[random];
  body.style.backgroundColor = color;
  box.innerText += boxes[random];
  colorText.innerText = color;
}