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
    console.log(error);
    console.log("sadge :(");
    document.getElementById("api-response").textContent =
      "Sorry we couldn't find the specified brawler";
  }
}

const filter = {
  display: async function displayCards(brawl) {
    const response = await fetch(brawl);
    const data = await response.json();
    data.list.forEach((character) => {
      DOMselectors.parent.insertAdjacentHTML(
        "beforeend",
        `<div id="parent"> <sub class="child">${character.name} <img class="img" src="${character.imageUrl}"><img/> <p class="desc">${character.description}</p> </sub> </div>`
      );
    });
  },
};

filter.display(brawl);
