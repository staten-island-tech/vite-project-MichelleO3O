import "../styles/style.css";
import food from "./arrays.js";

const DOMSelectors = {
  cards: document.getElementById("allCards"),
};

food.forEach((element) => {
  console.log(element);
});

//inside .forEarch do cards.insertAdjacentHTML to create every card
//
