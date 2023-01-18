import { DOMselectors } from "./DOMselectors";

const brawl = "https://api.brawlapi.com/v1/brawlers";
const URL = "http://api.quotable.io/random";

async function getData(brawl) {
  try {
    const response = await fetch(brawl);
    if (response.status < 200 || response.status > 299) {
      throw Error(response.status);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.list;
      console.log(data);
    }
  } catch (Error) {
    console.log(Error);
    console.log("sadge :(");
    document.getElementById("api-response").textContent =
      "Sorry we couldn't find the specified brawler";
  }
}

const filters = {};

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
    data.list.rarity.filter((character) => {
      character.name.includes("Chromatic").forEach((character) => {
        DOMselectors.parent.insertAdjacentHTML(
          "beforeend",
          `<div id="parent"><sub class="child" > <h2 class="name">${character.name}</h2> <img class="img" src="${character.imageUrl}"><img/> <h3 class="desc">${character.description}</h3> <a href="${character.link}"><button class="stats ">Statistics</button></a></sub> </div>`
        );
      });
    });
  },
};

functions.display(brawl);
