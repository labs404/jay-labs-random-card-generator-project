/* eslint-disable */
// import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = () => {
  // create arrays of suits and values
  let suits = ["♣", "♠", "♦", "♥"];
  let value = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];

  // generate random suit and value
  let randomSuit = () => {
    return Math.floor(Math.random() * 4);
  };
  let randomValue = () => {
    return Math.floor(Math.random() * 12);
  };

  // draw a card
  let drawTheCard = () => {
    document.querySelector("#theCard").innerHTML = `
    <div id="cardSuitTop"></div>
    <div id="cardValue"></div>
    <div id="cardSuitBottom"></div>`;

    let drawnSuit = suits[randomSuit()];
    let drawnValue = value[randomValue()];
    var suitColor = "blue";

    if (drawnSuit === "♥" || drawnSuit === "♦") {
      var suitColor = "red";
    } else {
      var suitColor = "black";
    }
    document.querySelector(
      "#cardSuitTop"
    ).innerHTML = `<div style="color:${suitColor}">${drawnSuit}</div>`;
    document.querySelector(
      "#cardValue"
    ).innerHTML = `<div style="color:${suitColor}">${drawnValue}</div>`;
    document.querySelector(
      "#cardSuitBottom"
    ).innerHTML = `<div style="color:${suitColor}">${drawnSuit}</div>`;
  };
  // drawTheCard();
  document
    .getElementById("documentButton")
    .addEventListener("click", drawTheCard);
};
