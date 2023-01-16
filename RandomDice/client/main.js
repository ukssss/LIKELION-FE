import { diceAnimation, getNode } from "./lib/index.js";

// [주사위 굴리기]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸 함수 만들기
// 3. handleRollingDice 함수 만들고 토글로 애니메이션 제작
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

const rollingDiceButton = getNode(".buttonGroup > button:nth-child(1)");

const handleRollingDice = () => {
  let stopAnimation;
  let isRolling = false;

  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 1000);
      console.log("애니메이션 시작");
    } else {
      clearInterval(stopAnimation);
      console.log("애니메이션 중지");
    }

    isRolling = !isRolling;
  };
};

rollingDiceButton.addEventListener("click", handleRollingDice());
