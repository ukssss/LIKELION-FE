/* global gsap */

import { insertLast, tiger, delayP, createUserCard, getNode, renderUserCard, changeColor, renderSpinner, renderEmptyCard } from "./lib/index.js";

// rendingUserList 함수 만들기
// ajax (tiger) get user list

// 유저 카드 생성
// 생성된 카드로 렌더링

// 1. userList.js 로 간다
// 2. renderUserCard 함수를 만들기
// 3. 만들어진 함수 안에 createUserCard 를 던지고,
// 4. renderUserCard 함수를 사용했을 때 렌더링이 잘 될 수 있도록

const userCardContainer = getNode(".user-card-inner");

async function rendingUserList() {
  renderSpinner(userCardContainer);

  try {
    await delayP(2000);
    getNode(".loadingSpinner").remove();

    let response = await tiger.get("https://jsonplaceholder.typicode.com/users");
    let userData = response.data;

    userData.forEach((data) => {
      renderUserCard(userCardContainer, data);
    });

    changeColor(".user-card");

    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    });
  } catch (err) {
    console.log(err);
  }
}

rendingUserList();
