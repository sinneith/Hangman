let randomWord;

function callRandomWord() {
  fetch(
    "http://api.wordnik.com/v4/words.json/randomWord?api_key=ovf2q8if4czt31jzpg32nbl445tfe4lhsaadekctmckq7tf45"
  )
    .then((response) => response.json())
    .then((value) => paintBlanks(value.word.toLowerCase()));
}

function paintBlanks(word) {
  randomWord = word;
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
  console.log(word);
  for (let i = 0; i < word.length; i++) {
    const blankContainer = document.getElementById("blankContainer");
    const blank = document.createElement("div");
    blank.classList.add("blank");
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
  }
}

function checkAlphabet(event) {
  let indexArr = [];
  const blankArr = document.getElementsByClassName("blank");
  const letter = event.target.innerText;

  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === letter) {
      indexArr.push(i);
    }
  }

  if (randomWord.includes(letter, 0) === true) {
    for (let k = 0; k < indexArr.length; k++) {
      blankArr[indexArr[k]].innerText = letter;
    }
  } else {
    hangman();
  }

  event.target.style.textDecoration = "line-through";
  event.target.style.color = "darkgray";
}

callRandomWord();
