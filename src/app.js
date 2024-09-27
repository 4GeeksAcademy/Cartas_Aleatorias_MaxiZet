/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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
    const valorAleatorio = elegirAleatorio(cardValues);
    const pintaAleatoria = elegirAleatorio(cardPinta);

    document.querySelector(".value").innerHTML = valorAleatorio;
    document.getElementById("pintaTop").innerHTML = pintaAleatoria;
    document.getElementById("pintaBot").innerHTML = pintaAleatoria;

    function colorCard() {
      let colorPinta;
      if (pintaAleatoria == "♥" || pintaAleatoria == "♦") {
        document.getElementById("pintaTop").classList.add("text-danger");
        document.getElementById("pintaBot").classList.add("text-danger");
      }
    }
    colorCard();
  }

  const containerFluid = document.getElementById("container");
  const buttonElement = document.createElement("button");
  buttonElement.classList = "btn btn-danger mt-3 fs-3";
  buttonElement.innerHTML = "Find your lucky card";

  buttonElement.addEventListener("click", actualizarCarta);
  containerFluid.appendChild(buttonElement);
};
