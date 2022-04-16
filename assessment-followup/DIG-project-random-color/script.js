'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor);
const colors = ["red", "blue", "yellow", "green", "white", "orange", "purple", "pink"];
const boxes = [
  {"box" : "🟥", "count" : 0},
  {"box" : "🟦", "count" : 0},
  {"box" : "🟨", "count" : 0},
  {"box" : "🟩", "count" : 0},
  {"box" : "⬜️", "count" : 0},
  {"box" : "🟧", "count" : 0},
  {"box" : "🟪", "count" : 0},
  {"box" : "💌", "count" : 0}
];
const body = document.getElementsByTagName("body")[0];
const box = document.getElementsByClassName("colorBox")[0];

function changeColor() {
  const random = Math.floor(Math.random() * (colors.length));
  const color = colors[random];
  body.style.backgroundColor = color;
  box.innerText += ` ${boxes[random].box} `;
  colorText.innerText = color;
  const count = document.getElementsByClassName(color)[0];
  count.innerText = Number(count.innerText) + 1;
  count.parentNode.style.color = color;
}