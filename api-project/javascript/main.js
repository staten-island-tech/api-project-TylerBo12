import "../styles/style.css";
import "./api.js";
import { DOMselectors } from "./DOMselectors";
import { brawl } from "./api.js";

//promises
function say(name) {
  const sayPromise = new Promise(function (resolve, reject) {
    resolve(`Halllllllllllllllllo ${name}`);
  });
  return sayPromise;
}

const victoria = say("victoria");
console.log(victoria);
victoria.then((value) => {
  console.log(value);
});

const filters = {
  removeCards: function () {
    const cards = document.querySelectorAll(".child");
    const cardsArray = Array.from(cards);
    cardsArray.forEach((cards) => {
      cards.remove();
    });
  },

  filterRarities: async function (cardName) {
    const response = await fetch(brawl);
    const data = await response.json();
    data.list
      .filter((character) => character.rarity.name.includes(cardName))
      .forEach((character) => {
        DOMselectors.parent.insertAdjacentHTML(
          "beforeend",
          `<div id="parent"><sub class="child" > <h2 class="name">${character.name}</h2> <img class="img" src="${character.imageUrl}" alt ="${character.name}"><img/> <h3 class="desc">${character.description}</h3> <a href="${character.link}"><button class="stats " confirm("Do you want to leave this page?")>Statistics</button></a></sub> </div>`
        );
      });
  },
};

const functions = {
  display: async function (brawl) {
    const response = await fetch(brawl);
    const data = await response.json();
    data.list.forEach((character) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div id="parent"><sub class="child" > <h2 class="name">${character.name}</h2> <img class="img" src="${character.imageUrl}" alt="Portrait Image of ${character.name} in game"> <h3 class="desc">${character.description}</h3> <a href="${character.link}" target = "_blank" rel="noopener noreferrer"><button class="stats" onClick = "confirmFunction()">Statistics</button></a></sub> </div>`
      );
    });
  },

  all: DOMselectors.allBtn.addEventListener("click", function () {
    filters.removeCards();
    functions.display(brawl);
  }),
  chromatics: DOMselectors.chromaticBtn.addEventListener("click", function () {
    filters.removeCards();
    filters.filterRarities("Chromatic");
  }),
  legendaries: DOMselectors.legendaryBtn.addEventListener("click", function () {
    filters.removeCards();
    filters.filterRarities("Legendary");
  }),
  mythics: DOMselectors.mythicBtn.addEventListener("click", function () {
    filters.removeCards();
    filters.filterRarities("Mythic");
  }),
  epics: DOMselectors.epicBtn.addEventListener("click", function () {
    filters.removeCards();
    filters.filterRarities("Epic");
  }),
  superRares: DOMselectors.superRareBtn.addEventListener("click", function () {
    filters.removeCards();
    filters.filterRarities("Super Rare");
  }),
  rares: DOMselectors.rareBtn.addEventListener("click", function () {
    filters.removeCards();
    filters.filterRarities("Rare");
  }),
};

functions.display(brawl);
