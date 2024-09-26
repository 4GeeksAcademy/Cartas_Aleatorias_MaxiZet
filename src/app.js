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
  const valorAleatorio = elegirAleatorio(cardValues);
  const pintaAleatoria = elegirAleatorio(cardPinta);

  document.querySelector(".value").innerHTML = valorAleatorio;
  document.querySelector(".pinta").innerHTML = pintaAleatoria;
};
