/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// * Array.isArray
const arr = [10, 100, 1000, 10000];

function isArray(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "array";
}

function isNull(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "null";
}

console.log(typeof arr); // ? object
console.log(Array.isArray(arr)); // ? true

/* 요소 순환 -------------------------------------------------------------- */

// * forEach
const user = {};

arr.forEach(function (item, index) {
  this[index] = item;
}, user); // ? {0: 10, 1: 100, 2: 1000, 3: 10000}

const span = document.querySelectorAll("span"); // ? NodeList(2) [span.first, span.second], 유사배열

// span.forEach((item) => {
//   item.addEventListener("click", function () {
//     console.log(this);
//   });
// });

// span.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     console.log((e.target.style.background = "orange"));
//   });
// });

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// * arr.reverse();

// splice
arr.splice(1, 0, 23, 5);
// console.log("arr : ", arr);
// arr.splice(1, 3, 23, 5);
// console.log("arr : ", arr);

// sort
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다
// 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다
arr.sort((a, b) => a - b);
console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
let todo = ["밥먹기", "미용실가기", "코딩공부하기"];

let template = todo.map((todoList) => {
  return /* HTML */ `<li>${todoList}</li>`;
}); // ? (3) ['<li>밥먹기</li>', '<li>미용실가기</li>', '<li>코딩공부하기</li>']

template.forEach((item) => {
  document.body.insertAdjacentHTML("beforeend", item);
});

let newArray = arr.map((item) => item * 2);
console.log(newArray);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
console.log(arr.indexOf(10)); // ? 1
console.log(arr.indexOf(100)); // ? 3
console.log(arr.indexOf(0)); // ? -1

// lastIndexOf

// includes
console.log(arr.includes(10)); // ? true
console.log(arr.includes(99)); // ? false

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  { id: 1, name: "로운" },
  { id: 2, name: "승택" },
  { id: 3, name: "연주" },
];
// find
const find = users.find((item, index) => {
  return item.id < 5;
});

console.log(find); // ? {id: 1, name: '로운'}id: 1name: "로운"[[Prototype]]: Object

// findIndex
const findIndex = users.findIndex((item) => {
  return item.id === 3;
});

console.log(findIndex); // ? 2

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let result = arr.filter((number) => {
  return number < 100;
});

console.log(result); // ? (2) [1000, 10000]

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: "윤보라",
    age: 28,
    job: "작꼬져",
  },
  {
    name: "이로운",
    age: 23,
    job: "배고픈 개발자",
  },
  {
    name: "오승택",
    age: 21,
    job: "물음표살인마",
  },
];

// reduce
// TODO 친구들 나이의 총 합을 구하시오
let age = friends.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

console.log(age); // ? 72

let template2 = todo.reduce((acc, cur, index) => {
  return /* html */ acc + `<li>할일 ${index + 1} : ${cur}</li>`;
}, "");

console.log(template2); // ? <li>할일 1 : 밥먹기</li><li>할일 2 : 미용실가기</li><li>할일 3 : 코딩공부하기</li>

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = "성찬 보경 일범 세민 형진 주현";

// split : 문자 -> 배열
let nameArray = str.split(" ");
console.log(nameArray); // ? (6) ['성찬', '보경', '일범', '세민', '형진', '주현']

// join : 배열 -> 문자
let nameJoin = nameArray.join(" / ");
console.log(nameJoin); // ? 성찬 / 보경 / 일범 / 세민 / 형진 / 주현
