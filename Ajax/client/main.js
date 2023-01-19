/* global gsap */

import { insertLast, xhrData, xhrPromise, ukss, delayP, getNode, renderUserCard, renderSpinner, changeColor, renderEmptyCard, attr } from "./lib/index.js";

// xhrPromise
//   .get("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     insertLast(document.body, JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function render() {
//   await delayP(2000);
//   let response = await ukss.get("https://jsonplaceholder.typicode.com/users/1");

//   console.log(response.data);
// }

// render();

// TODO rendingUserList 함수 만들기
// ajax (ukss) get user List

// 유저 카드 생성
// 생성된 카드로 렌더링

// rendingUserList();

//  1. userList.js로 갑니다.
//  2. renderUserCard 함수를 만들기
//  3. 만들어진 함수 안에 createUserCard를 던지고,
//  4. renderUserCard함수를 사용했을 때  랜더링이 잘 될 수 있도록.

const userCardContainer = getNode(".user-card-inner");

async function rendingUserList() {
  renderSpinner(userCardContainer);

  try {
    await delayP(2000);
    getNode(".loadingSpinner").remove();

    let response = await ukss.get("http://localhost:3000/users");
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
    console.error(err);
    renderEmptyCard(userCardContainer);
  }
}

rendingUserList();

// TODO 삭제 버튼을 클릭하면 콘솔창에 '삭제' 글자가 출력이 될 수 있도록 만들기
async function handler(e) {
  let deleteButton = e.target.closest("button");
  let article = e.target.closest("article");

  // * 버튼이 아니면 실행 X, 누른 대상의 인접한 대상이 article이 아니면 실행 X
  if (!deleteButton || !article) return;

  let id = attr(article, "data-index").slice(5);

  // ukss.delete(`http://localhost:3000/users/${id}`).then(() => {
  //   userCardContainer.innerHTML = "";
  //   rendingUserList();
  // });

  // * async await
  await ukss.delete(`http://localhost:3000/users/${id}`);
  userCardContainer.innerHTML = "";
  rendingUserList();
}

userCardContainer.addEventListener("click", handler);
