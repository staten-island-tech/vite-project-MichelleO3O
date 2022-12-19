import "../styles/style.css";
import food from "./arrays.js";

const DOMSelectors = {
  cards: document.getElementById("allCards"),
};

food.forEach((element) => {
  DOMSelectors.cards.insertAdjacentHTML(
    "beforeend",
    `
  <div class="card">
    <h2 class="card-title">${element.name}</h2>
    <img src="${element.img}">
    <div class="card-details">
      <h3>$${element.price}</h3>
      <h4 class="vegetarian">Vegetarian: ${
        element.vegetarian === true ? "Yes" : "No"
      }</h4>
    </div>
  </div>
  `
  );
});

//inside .forEarch do cards.insertAdjacentHTML to create every card
//
