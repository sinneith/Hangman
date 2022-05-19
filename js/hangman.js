const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const gaveOver = document.getElementById("over");
const againBtn = document.querySelector("button");

ctx.lineWidth = "3";
ctx.strokeStyle = "#222";

let counterNum = 0;

function counter() {
  counterNum += 1;
  console.log(counterNum);
  hangman();
}

function hangman() {
  switch (counterNum) {
    case 1:
      ctx.moveTo(100, 350);
      ctx.lineTo(100, 50);
      ctx.stroke();
      ctx.moveTo(60, 350);
      ctx.lineTo(140, 350);
      ctx.stroke();
      break;
    case 2:
      ctx.moveTo(100, 50);
      ctx.lineTo(240, 50);
      ctx.stroke();
      break;
    case 3:
      ctx.moveTo(239, 50);
      ctx.lineTo(239, 80);
      ctx.stroke();
      break;
    case 4:
      ctx.moveTo(160, 50);
      ctx.lineTo(100, 110);
      ctx.stroke();
      break;
    case 5:
      ctx.beginPath();
      ctx.arc(239, 110, 30, 0, 2 * Math.PI);
      ctx.stroke();
      break;
    case 6:
      ctx.moveTo(239, 140);
      ctx.lineTo(239, 220);
      ctx.stroke();
      break;
    case 7:
      ctx.moveTo(239, 140);
      ctx.lineTo(200, 200);
      ctx.stroke();
      break;
    case 8:
      ctx.moveTo(239, 140);
      ctx.lineTo(280, 200);
      ctx.stroke();
      break;
    case 9:
      ctx.moveTo(239, 220);
      ctx.lineTo(200, 300);
      ctx.stroke();
      break;
    case 10:
      ctx.moveTo(239, 220);
      ctx.lineTo(280, 300);
      ctx.stroke();
      ctx.moveTo(223, 105);
      ctx.lineTo(233, 115);
      ctx.stroke();
      ctx.moveTo(233, 105);
      ctx.lineTo(223, 115);
      ctx.stroke();
      ctx.moveTo(243, 105);
      ctx.lineTo(253, 115);
      ctx.stroke();
      ctx.moveTo(253, 105);
      ctx.lineTo(243, 115);
      ctx.stroke();
      ctx.strokeRect(228, 122, 20, 10);
      showAnswer();
      break;
  }
}

function showAnswer() {
  gaveOver.style.display = "block";
  for (let i = 0; i < blankArr.length; i++) {
    blankArr[i].innerText = randomWord[i];
  }
}

againBtn.addEventListener("click", () => location.reload());
