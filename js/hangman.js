const canvas = document.getElementById("hangman");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
ctx.closePath();

function hangman() {
  console.log("hangman");
}
