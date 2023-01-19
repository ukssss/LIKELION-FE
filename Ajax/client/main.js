import { insertLast, tiger, delayP, createUserCard, getNode } from "./lib/index.js";

// rendingUserList 함수 만들기
// ajax (tiger) get user list

const userCardContainer = getNode(".user-card-inner");

async function rendingUserList() {
  let response = await tiger.get("https://jsonplaceholder.typicode.com/users/1");

  let userData = response.data;

  insertLast(userCardContainer, createUserCard(userData));
}

rendingUserList();
