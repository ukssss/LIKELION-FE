// TODO 1. 인풋 밸류값 가져오기
// TODO 2. 이벤트 핸들러 연결하기
// TODO 3. 이벤트 기본동작 차단하기
// TODO 4. 두 수의 합을 더해주기
// TODO 5. 화면에 출력하기

const firstInput = getNode("#firstNumber");
const secondInput = getNode("#secondNumber");
const done = getNode("#done");

function getInputValue(node) {
  if (typeof node === "string") node = getNode(node);
  if (node.tagName !== "INPUT") refError("getInputValue 함수는 INPUT ELEMENT만 허용합니다");
  return node.value;
}

const sum = (valueA, valueB) => valueA + valueB;

// function sum(valueA, valueB) {
//   return valueA + valueB;
// }

function handler(e) {
  e.preventDefault();

  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);
  console.log(total);
}

done.addEventListener("click", handler);
