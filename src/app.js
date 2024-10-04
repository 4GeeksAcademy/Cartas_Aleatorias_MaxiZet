/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let intervalId;
window.onload = function() {
  //write your code here
  let cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "Q",
    "K"
  ];

  let cardPinta = ["♦", "♥", "♠", "♣"];

  function elegirAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function actualizarCarta() {
    let valorAleatorio = elegirAleatorio(cardValues);
    let pintaAleatoria = elegirAleatorio(cardPinta);

    document.querySelector(".value").innerHTML = valorAleatorio;
    document.getElementById("pintaTop").innerHTML = pintaAleatoria;
    document.getElementById("pintaBot").innerHTML = pintaAleatoria;

    colorCard(pintaAleatoria);
  }

  function colorCard(pinta) {
    if (pinta == "♥" || pinta == "♦") {
      document
        .getElementById("pintaTop")
        .classList.replace("text-black", "text-danger");
      document
        .getElementById("pintaBot")
        .classList.replace("text-black", "text-danger");
    } else {
      document
        .getElementById("pintaTop")
        .classList.replace("text-danger", "text-black");
      document
        .getElementById("pintaBot")
        .classList.replace("text-danger", "text-black");
    }
  }

  let customWidth = 250;

  documento.querySelector("#input-width").addEventListener("change", event => {
    customWidth = event.target.value;
    document.querySelector(".card").style.width = customWidth + "px";
  });

  const containerElement = document.getElementById("container");
  const buttonCard = document.createElement("button");
  const buttonTimer = document.createElement("button");
  const buttonTimerOff = document.createElement("button");

  buttonCard.classList = "btn btn-warning mt-3 mx-2 fs-3";
  buttonTimer.classList = "btn btn-danger mt-3 mx-2 fs-3";
  buttonTimerOff.classList = "btn btn-dark mt-3 mx-2 fs-3";
  buttonCard.innerHTML = "Start Generator Card";
  buttonTimer.innerHTML = "Start Timer";
  buttonTimerOff.innerHTML = "Stop Timer";

  buttonCard.addEventListener("click", actualizarCarta);
  buttonTimer.addEventListener("click", () => {
    intervalId = setInterval(actualizarCarta, 1000);
  });
  buttonTimerOff.addEventListener("click", () => {
    clearInterval(intervalId);
  });

  containerElement.appendChild(buttonCard);
  containerElement.appendChild(buttonTimer);
  containerElement.appendChild(buttonTimerOff);
};
