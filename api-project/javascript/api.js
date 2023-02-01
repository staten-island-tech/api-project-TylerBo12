const brawl = "https://api.brawlapi.com/v1/brawlers";

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

export { brawl };
