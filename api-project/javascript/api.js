const brawl = "https://api.brawlapi.com/v1/brawlers";
async function getData(Url) {
  try {
    const response = await fetch(Url);
    if (response.status < 200 || response.status > 299) {
      throw Error(response.status);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.name;
    }
  } catch (Error) {
    console.log(error);
    console.log("sadge :(");
    document.getElementById("api-response").textContent =
      "Sorry we couldn't find the specified brawler";
  }
}

console.log(brawl);
