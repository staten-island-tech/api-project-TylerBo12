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

  filterChromatics: async function () {
    const response = await fetch(brawl);
    const data = await response.json();
    data.list.filter((character) =>
      character.name.includes("Chromatic").forEach((character) => {
        DOMselectors.parent.insertAdjacentHTML(
          "beforeend",
          `<div id="parent"><sub class="child" > <h2 class="name">${character.name}</h2> <img class="img" src="${character.imageUrl}"><img/> <h3 class="desc">${character.description}</h3> <a href="${character.link}"><button class="stats ">Statistics</button></a></sub> </div>`
        );
      })
    );
  },
  filterLegendaries: async function () {
    const response = await fetch(brawl);
    const data = await response.json();
    data.list.filter((character) => {
      character.rarity.name.includes("Legendary").forEach((character) => {
        DOMselectors.parent.insertAdjacentHTML(
          "beforeend",
          `<div id="parent"><sub class="child" > <h2 class="name">${character.name}</h2> <img class="img" src="${character.imageUrl}"><img/> <h3 class="desc">${character.description}</h3> <a href="${character.link}"><button class="stats ">Statistics</button></a></sub> </div>`
        );
      });
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
        `<div id="parent"><sub class="child" > <h2 class="name">${character.name}</h2> <img class="img" src="${character.imageUrl}"><img/> <h3 class="desc">${character.description}</h3> <a href="${character.link}"><button class="stats ">Statistics</button></a></sub> </div>`
      );
    });
  },
  chromatics: DOMselectors.chromaticBtn.addEventListener(
    "click",
    async function () {
      filters.removeCards();
      await filters.filterChromatics();
    }
  ),
  legendaries: DOMselectors.legendaryBtn.addEventListener("click", function () {
    filters.removeCards();
    filters.filterLegendaries();
  }),
};

functions.display(brawl);
