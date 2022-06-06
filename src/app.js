/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var randomNum;
var Suits;
var theSuit;

window.onload = () => {
  theSuit = randomSuits();
  document.getElementById("suit1").innerHTML = theSuit;
  document.getElementById("suit2").innerHTML = theSuit;
  document.getElementById("number").innerHTML = randomCard();
  document.getElementById("button").innerHTML = "Next Card";
};
//Generar numero
const randomCard = () => {
  randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum === 1) {
    randomNum = "A";
  } else if (randomNum === 11) {
    randomNum = "J";
  } else if (randomNum === 12) {
    randomNum = "Q";
  } else if (randomNum === 13) {
    randomNum = "K";
  } else {
    randomNum = randomNum;
  }
  if (
    randomNum === "10" ||
    randomNum === "A" ||
    randomNum === "J" ||
    randomNum === "Q" ||
    randomNum === "K"
  ) {
    document.getElementById("number").classList.add("numSize");
  } else {
    document.getElementById("number").classList.remove("numSize");
  }
  return randomNum;
};
//Generar Suits
const randomSuits = () => {
  Suits = Math.floor(Math.random() * 4) + 1;
  if (Suits === 1) {
    Suits = "&diams;";
  } else if (Suits === 2) {
    Suits = "&spades;";
  } else if (Suits === 3) {
    Suits = "&clubs;";
  } else {
    Suits = "&hearts;";
  }
  if (Suits === "&diams;" || Suits === "&hearts;") {
    document.getElementById("the-card").classList.add("redcolor");
  } else {
    document.getElementById("the-card").classList.remove("redcolor");
  }

  return Suits;
};

//////////////////////////////////Raton por encima
document.getElementById("button").onmouseover = function() {
  mouseOver();
};
document.getElementById("button").onmouseout = function() {
  mouseOut();
};

function mouseOver() {
  document.getElementById("button").innerHTML = "You can't stop now!";
  document.getElementById("button").style.color = "white";
}

function mouseOut() {
  document.getElementById("button").innerHTML = "Come on!";
  document.getElementById("button").style.color = "white";
}

//////////////////////////////Manteniendo pulsado

document.getElementById("button").onmousedown = function() {
  mouseDown();
};
document.getElementById("button").onmouseup = function() {
  mouseUp();
};

function mouseDown() {
  document.getElementById("button").innerHTML = "Allrigth!";
  document.getElementById("button").classList.add("gradient");
  document.getElementById("button").style.color = "black";
}
