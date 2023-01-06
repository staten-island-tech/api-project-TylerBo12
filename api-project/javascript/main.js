import "../styles/style.css";
import "./api.js";

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

//data
