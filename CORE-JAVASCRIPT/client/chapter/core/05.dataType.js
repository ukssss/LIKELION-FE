/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null); // ? object, 에러

// 2. 값이 할당되지 않은 상태
console.log(typeof undefined); // ? undefined

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello";
let message2 = `hello`; // ! error 선언과 할당을 같이 해주어야 함

console.log(message1); // ? hello
console.log(message2); // ? hello, 출력은 된다

let username = "ukss";
let test = `Hello My name is ${username} !`;

console.log(test); // ? Hello My name is ukss !

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123;

console.log("number : ", number); // ? number : 100.123
console.log("typeof : ", typeof number); // ? typeof : number

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(typeof 12913n); // ? bigint

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true); // ? boolean

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {}); // ? object

// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol("uid")); // ? symbol
console.log(typeof Math); // ? object

const func = function () {};

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
/* key value */
// const user = new Object();
// * 객체 리터럴
const user = {
  name: "ukss",
  age: 25,
  fish: function () {
    return "팥붕땡긴다";
  },
};
console.log("user.name", user.name); // ? ukss
console.log("user.age", user.age); // ? 25
console.log(user.fish); // ? () { return "팥붕땡긴다"; }

// Array
// let list = new Array();
// * 배열 리터럴, collection
let list = [10, 100, 1000, 1, 2, 3];
console.log("list[3]", list[3]); // ? 1
console.log("list.length", list.length); // ? 6

// function
function sum(a, b) {
  return a + b;
}
console.log("sum()", sum(10, 30)); // ? 40

function fishBreadCase(data) {
  return `${data} 맛 붕어빵`;
}
console.log(fishBreadCase("팥")); // ? 팥 맛 붕어빵

// this
