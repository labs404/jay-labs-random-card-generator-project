// import "./style.css";

window.onload = () => {
  // create arrays of suits and values
  // let suits = ["♣", "♠", "♦", "♥"]; // keeping in case font/character issues arrise
  let suits = ["&#9827;", "&#9824", "&#9830", "&#9829"];
  let value = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
  var glorf = 0;

  // generate random suit and value
  let randomSuit = () => {
    return Math.floor(Math.random() * 4);
  };
  let randomValue = () => {
    return Math.floor(Math.random() * 12);
  };

  // function to draw a card and generate html content.
  let drawTheCard = () => {
    document.querySelector("#theCard").innerHTML = `
    <div id="cardSuitTop"></div>
    <div id="cardValue"></div>
    <div id="cardSuitBottom"></div>`;

    let drawnSuit = suits[randomSuit()];
    let drawnValue = value[randomValue()];
    var suitColor = "blue";

    if (drawnSuit === "&#9829" || drawnSuit === "&#9830") {
      // if (drawnSuit === "♥" || drawnSuit === "♦") { // keeping in case font/character issues arrise
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
  // drawTheCard() onclick listener
  document
    .getElementById("drawCardButton")
    .addEventListener("click", drawTheCard);

  //function for timed interval card generation.
  let interval = null;

  document.getElementById("timedButton").addEventListener("click", function() {
    if (interval === null) {
      interval = setInterval(function() {
        drawTheCard();
      }, 2000);
    } else {
      clearInterval(interval);
      interval = null;
    }
  });
};
