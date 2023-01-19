import { xhrData, insertLast, xhrPromise, tiger, delayP } from "./lib/index.js";

async function rendingUserList() {
  let response = await tiger.get("https://jsonplaceholder.typicode.com/users");

  let userData = response.data;
  console.log(userData);
}

rendingUserList();
