// TODO 1. 인풋 밸류값 가져오기
// TODO 2. 이벤트 핸들러 연결하기
// TODO 3. 이벤트 기본동작 차단하기
// TODO 4. 두 수의 합을 더해주기
// TODO 5. 화면에 출력하기

import { getNode, sum, getInputValue, clearContents, insertLast } from "./lib/index.js";

const firstInput = getNode("#firstNumber");
const secondInput = getNode("#secondNumber");
const done = getNode("#done");
const result = getNode(".result");

function addCal() {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents(result);
  insertLast(result, total);
}

function handler(e) {
  e.preventDefault();

  addCal();
}

function inputHandler() {
  addCal();
}

done.addEventListener("click", handler);

firstInput.addEventListener("change", inputHandler);
secondInput.addEventListener("change", inputHandler);
