import { insertLast, xhrData, xhrPromise, ukss, delayP } from "./lib/index.js";

// xhrPromise
//   .get("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     insertLast(document.body, JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function render() {
  await delayP(2000);
  let response = await ukss.get("https://jsonplaceholder.typicode.com/users/1");

  console.log(response.data);
}

render();
