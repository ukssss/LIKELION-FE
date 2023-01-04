/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* Primitives vs. Object ------------------------------------------------ */

let test = /* HTML */ `
  <h1>
    <span class="first">hello</span>
    <span class="second">world</span>
  </h1>
`;

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* CSS */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: 800,
  height: "40vh",
  minHeight: 280,
  transform: "translate(-50%, -50%)",
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authentication = 인증
// authorization = 권한

let authUser = {
  uid: "user-id-asdA123kwer",
  name: "ukss",
  email: "1872003115su@gmail.com",
  isSignIn: true,
  permission: "paid", // free | paid
};

// * 점(.) 표기법
// TODO authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);

// * 대괄호([]) 표기법
// TODO 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// TODO 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser["uid"]);
// console.log(authUser["name"]);
// console.log(authUser["email"]);
// console.log(authUser["isSignIn"]);
// console.log(authUser["permission"]);

// * 계산된 프로퍼티 (calcurate property)
// let calculateProperty = "phone"; // phone | tel

// function createUser(computedProp = "phone") {
//   return {
//     name: "unknown",
//     email: "unknown@company.io",
//     [computedProp]: "010-7169-0262",
//   };
// }

// const user = createUser("tel");

// TODO 프로퍼티 포함 여부 확인
// Object.prototype.SIGN = true;

// for (let key in authUser) {
//   if (Object.prototype.hasOwnProperty.call(authUser, key)) {
//     console.log(key);
//   }
// }

// TODO 프로퍼티 나열
// let keyArr = Object.keys(authUser);
// let valueArr = Object.values(authUser);

// console.log(keyArr, valueArr);

// * arrow function
// const getPropertiesList = object => Object.keys(object)

// * Default
// function getPropertiesList(object) {
//   let result = [];
//   for (let key in object) {
//     if (Object.prototype.hasOwnProperty.call(authUser, key)) result.push(key);
//   }
//   return result;
// }

// * 프로퍼티 제거 or 삭제 (Remove or Delete)

// ? 유틸 함수를 만들 수 있을 것 같은데 .. ?

// * 1. 함수 이름 정하기
// * 2. 인수(arguments)와 인자(parameter) 정하기
// * 3. 확인하기(validation)
// * 4. 리턴값 (return)

function removeProperty(object, key) {
  object[key] = null;
}

function deleteProperty(object, key) {
  delete Object[key];
}

deleteProperty(authUser, "uid");

// * 단축 프로퍼티
let name = "선범";
let email = "seonbeom2@euid.dev";
let authorization = "Lv. 99";
let isLogin = true;

// * shorthand property
const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// * 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// * 객체의 키를 배열로 바꾸고 그 배열의 갯수가 0 이면 ? true : false

function isEmptyObject(object) {
  // return Object.keys(object).length === 0 ? true : false;
  return Object.keys(object).length === 0;
}

const empty = {};

console.log(isEmptyObject(empty));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430,
};

// TODO 월급의 총 합을 구하세요.
let total = 0;
/* 구조 분해 할당 structure destructuring assignments */
for (let [key, value] of Object.entries(salaries)) {
  // let key = keyValue[0];
  // let value = keyValue[1];

  total += value;
}

console.log(total);

let color = ["#ff0000", "#2b00ff", "#00ff2f"];
// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];

const [, , green] = color;
console.log(green);

// 발췌

/* ---------------------------------------------------------------------- */
/* 객체 구조 분해 할당 destructuring assignments                                                                */
/* ---------------------------------------------------------------------- */

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 430,
// };

const { John, Ann, Pete } = salaries;

console.log(John);

// const element = {
//   width: 500,
//   height: 500,
// };
// function getElementWidth(option, node) {
//   const {width, height} = element;

// }
