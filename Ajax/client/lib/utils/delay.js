import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

const first = getNode(".first");
const second = getNode(".second");

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';

// delay(() => {
//   first.style.top = "-100px";
//   delay(() => {
//     delay(() => {
//       second.style.left = "100px";
//       delay(() => {
//         first.style.top = "0px";
//         second.style.left = "0px";
//       });
//       first.style.transform = "rotate(360deg)";
//     });
//   });
// });

// delayP()
//   .then(() => {
//     first.style.top = "-100px";
//     return delayP(); // 1초 지연
//   })
//   .then(() => {
//     first.style.transform = "rotate(360deg)";
//     second.style.left = "100px";
//     return delayP(); // 1초 지연
//   })
//   .then(() => {
//     first.style.top = "0px";
//     second.style.left = "0px";
//   });

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: "성공",
  errorMessage: "알 수 없는 오류가 발생했습니다.",
};

//* 실행을 1초 지연시키는 함수 생성
export function delayP(options = {}) {
  // defaultOptions
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  // 객체 합성 mixin
  if (isObject(options)) {
    config = { ...config, ...options };
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  });
}

// delayP().then((res) => {
//   console.log(res); // 진짜 성공
// });

// * async await
// async : 일반 함수를 promise를 반환하는 함수로 만든다.
// await : 1. promise가 반환하는 result를 가져오기
//         2. 코드 실행 흐름 제어

// async function delayA() {
//   return "완료";
// }

// let result = await delayA();

// console.log(result);

async function 라면끓이기() {
  await delayP(1500);
  console.log("냄비에 물 붓기");

  await delayP(1500);
  console.log("끓으면 면 넣고 스프 넣기");

  await delayP(1500);
  console.log("면이 익으면 면은 그릇에 건지고 계란 투척");

  await delayP(1500);
  console.log("익은 계란과 국물을 그릇에 담기");

  await delayP(1500);
  console.log("맛있게 먹기!");
}

라면끓이기();
