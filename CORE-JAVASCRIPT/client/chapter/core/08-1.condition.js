/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */
let answer = prompt("자바스크립트의 '공식'이름은 무엇일까요 ?");
let result = "";
answer === "ECMAScript" ? (result += "정답") : (result += "바보");
console.log(result);

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = "yes";

// 영화 볼거니?
let goingToWatchMovie = "no";

// if 문(statement)
if (didWatchMovie === "yes") {
  console.log("영화 봤어!");
}

// else if 복수 조건 처리
else if (goingToWatchMovie === "yes") {
  console.log("영화 볼 예정이야!");
}

// else 절(caluse)
else {
  console.log("영화 안볼래!");
}

// 삼항연산자 식
let mention = "";
didWatchMovie === "yes" ? (mention = "봤음") : goingToWatchMovie === "yes" ? (mention = "볼거임") : (mention = "안봐");
console.log(mention);

// 조건부 연산자

// 멀티 조건부 연산자 식
