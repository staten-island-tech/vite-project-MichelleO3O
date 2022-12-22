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
        element.vegetarian ? "Yes" : "No"
      }</h4>
    </div>
  </div>
  `
  );
});

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("yellow")) {
    document.body.classList.add("pink");
    document.body.classList.remove("yellow");
  } else {
    document.body.classList.add("yellow");
    document.body.classList.remove("pink");
  }
});

document.querySelector(".veg-btn").addEventListener("click", function () {
  const allCards = document.getElementById("allCards");
  allCards.innerHTML = "";
  food
    .filter((e) => e.vegetarian === true)
    .forEach((element) => {
      DOMSelectors.cards.insertAdjacentHTML(
        "beforeend",
        `
      <div class="card">
        <h2 class="card-title">${element.name}</h2>
        <img src="${element.img}">
        <div class="card-details">
          <h3>$${element.price}</h3>
          <h4 class="vegetarian">Vegetarian: ${
            element.vegetarian ? "Yes" : "No"
          }</h4>
        </div>
      </div>
      `
      );
    });
});

document.querySelector(".non-veg-btn").addEventListener("click", function () {
  const allCards = document.getElementById("allCards");
  allCards.innerHTML = "";
  food
    .filter((e) => e.vegetarian === false)
    .forEach((element) => {
      DOMSelectors.cards.insertAdjacentHTML(
        "beforeend",
        `
      <div class="card">
        <h2 class="card-title">${element.name}</h2>
        <img src="${element.img}">
        <div class="card-details">
          <h3>$${element.price}</h3>
          <h4 class="vegetarian">Vegetarian: ${
            element.vegetarian ? "Yes" : "No"
          }</h4>
        </div>
      </div>
      `
      );
    });
});

document.querySelector(".all-food").addEventListener("click", function () {
  const allCards = document.getElementById("allCards");
  allCards.innerHTML = "";
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
            element.vegetarian ? "Yes" : "No"
          }</h4>
        </div>
      </div>
      `
    );
  });
});

//inside .forEarch do cards.insertAdjacentHTML to create every card
