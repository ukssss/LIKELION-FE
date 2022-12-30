/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

// const javaScript = {
//   creator: "Brendan Eich",
//   createAt: "1995.05",
//   standardName: "ECMAScript",
//   currentVersion: 2022,
//   hasOwnProperty: function () {
//     return "헤헤";
//   },
// };

// let key = "valueOf";

// console.log(key in javaScript);

// TODO 객체의 속성(property) 포함 여부 확인 방법
// TODO 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
// console.log(javaScript.hasOwnProperty(key));
// Object.prototype.nickName = "ukss";

// TODO 객체 자신의 속성인지 확인하는 방법
// TODO "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

// * for ~ in 문
// TODO 객체 자신의 속성만 순환하려면?
// for (let key in javaScript) {
//   if ({}.hasOwnProperty.call(javaScript, key)) {
//     console.log(key);
//   }
// }

// TODO 배열 객체 순환에 사용할 경우?
// ! 객체에 양보하세요,,,
let tens = [10, 100, 1000, 10000];

for (let value in tens) {
  if ({}.hasOwnProperty.call(tens, value)) {
    console.log(tens[value]);
  }
}
