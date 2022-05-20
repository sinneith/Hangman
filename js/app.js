let randomWord;
const blankArr = document.getElementsByClassName("blank");

let wordLetter = [];
let trueCounter = 0;
let tryCounter = 0;

function callRandomWord() {
  fetch(
    "https://api.wordnik.com/v4/words.json/randomWord?api_key=ovf2q8if4czt31jzpg32nbl445tfe4lhsaadekctmckq7tf45"
  )
    .then((response) => response.json())
    .then((value) => paintBlanks(value.word.toLowerCase()));
}

function paintBlanks(word) {
  randomWord = word;
  wordLetter = [...new Set(randomWord)];
  const alphabetArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < word.length; i++) {
    const blank = document.createElement("div");

    blank.classList.add("blank");
    blank.innerText = "\n";
    blankContainer.appendChild(blank);

    if (word[i] === "-") {
      blank.innerText = word[i];
    }
  }

  for (let j = 0; j < alphabetArr.length; j++) {
    const alphabets = document.getElementById("alphabets");
    const alphabet = document.createElement("div");
    alphabet.innerText = alphabetArr[j];
    alphabet.classList.add("alphabet");
    alphabets.appendChild(alphabet);
    alphabet.addEventListener("click", checkAlphabet);
    alphabet.addEventListener("click", checkWin);
  }
}

function checkAlphabet(event) {
  let indexArr = [];
  const letter = event.target.innerText;

  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === letter) {
      indexArr.push(i);
    }
  }

  if (randomWord.includes(letter, 0) === true) {
    for (let j = 0; j < indexArr.length; j++) {
      blankArr[indexArr[j]].innerText = letter;
    }
  } else {
    counter();
  }

  event.target.style.textDecoration = "line-through";
  event.target.style.color = "darkgray";
}

function checkWin(event) {
  tryCounter++;
  for (let i = 0; i < wordLetter.length; i++) {
    if (wordLetter[i] === event.target.innerText) {
      trueCounter++;
    }
  }

  if (
    trueCounter === wordLetter.length &&
    tryCounter < 10 + wordLetter.length
  ) {
    showAnswer("win");
  }
}

callRandomWord();
