import { diceAnimation, disableElement, enableElement, getNode, getNodes } from "./lib/index.js";

// [주사위 굴리기]
// 1. dice 애니메이션 불러오기 ✅
// 2. bindEvent 유틸 함수 만들기
// 3. handleRollingDice 함수 만들고 토글로 애니메이션 제작
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

// [레코드 리스트 보이기]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만들기
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기

// 배열의 구조 분해 할당
const [rollingDiceButton, recordButton, resetButton] = getNodes(".buttonGroup > button");

// const rollingDiceButton = getNode(".buttonGroup > button:nth-child(1)");
// const recordButton = getNode(".buttonGroup > button:nth-child(2)");
// const resetButton = getNode(".buttonGroup > button:nth-child(3)");

// IIFE
const handlerRollingDice = (() => {
  let stopAnimation;
  let isRolling = false;

  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 1000);
      disableElement(recordButton);
      disableElement(resetButton);
    } else {
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
    }

    isRolling = !isRolling;
  };
})();

rollingDiceButton.addEventListener("click", handlerRollingDice);
