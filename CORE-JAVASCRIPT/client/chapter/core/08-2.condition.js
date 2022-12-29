/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

// * 사이 범위 확인하기 문제
let age = prompt("나이를 입력하세요", 25);

if (age >= 14 && age <= 90) {
  console.log("맞다!");
} else {
  console.log("너 몇살이냐?");
}

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsFalsy: true };

// * 로그인 구현하기
let username = prompt("이름내놔");

if (username.localeCompare("Admin")) {
  let password = prompt("비번ㄱ");
  if (password.localeCompare("TheMaster")) {
    console.log("코드 좀 치네 ㅋㅋ");
  } else {
    console.log("맞겠냐? ㅋㅋ");
  }
} else if (username === "" || username === null) {
  console.log("쫄?");
} else {
  console.log("까불고 있네 ㅋㅋ");
}
