/* global gsap */

import { jujeobData } from "./data/data.js";
import { clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert, copy, addClass, removeClass } from "./lib/index.js";

const submit = getNode("#submit");
const resultArea = getNode(".result");

function clickSubmitHandler(e) {
  e.preventDefault();
  let name = getInputValue("#nameField");

  if (!name) {
    showAlert(".alert", "이름을 입력해주세요", 2000);
    addClass(resultArea, "shake");

    // GSAP
    gsap.fromTo(resultArea, 0.01, { x: -5 }, { x: 5, clearProps: "x", repeat: 20 });

    // setTimeout(() => {
    //   removeClass(resultArea, "shake");
    // }, 1000);
    // return;
  }

  if (isNumericString(name)) {
    showAlert(".alert", "제대로된 이름을 입력해주세요", 2000);
    return;
  }

  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

function clickCopyHandler(e) {
  let text = resultArea.textContent;
  // console.log("copy(text) : ", copy(text));
  copy(text).then(() => {
    showAlert(".alert-success", "클립보드 복사가 완료됐습니다.", 2000);
  });

  // 약속구문

  // 약속
  // 다음 해야 할 일
}

submit.addEventListener("click", clickSubmitHandler);
resultArea.addEventListener("click", clickCopyHandler);
