
let dice1 = document.querySelectorAll("div .dice1");
let dice2 = document.querySelectorAll("div .dice2");
let title = document.querySelector("h1")


let randomNumber1 = Math.floor(Math.random() * 6);
let randomNumber2 = Math.floor(Math.random() * 6);

let player1 = dice1[randomNumber1];
let player2 = dice2[randomNumber2];

function dices() {
  

  player1.classList.add("show");
  player2.classList.add("show");

  if (randomNumber1 > randomNumber2) {
    title.innerHTML = "🚩 Player 1 Wins!";
  }
  else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    title.innerHTML = "Draw!";
  }

  localStorage.setItem("hola","saludo");
}

dices();
