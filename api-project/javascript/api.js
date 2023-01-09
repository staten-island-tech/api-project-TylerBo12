const brawl = "https://api.brawlapi.com/v1/brawlers";
const URL = "http://api.quotable.io/random";

async function getData(brawl) {
  try {
    const response = await fetch(brawl);
    if (response.status < 200 || response.status > 299) {
      throw Error(response.status);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.name;
      console.log(data);
    }
  } catch (Error) {
    console.log(error);
    console.log("sadge :(");
    document.getElementById("api-response").textContent =
      "Sorry we couldn't find the specified brawler";
  }
}

getData(brawl);
