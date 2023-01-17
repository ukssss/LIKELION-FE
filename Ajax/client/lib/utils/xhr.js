/* readyState
  0: uninitalized // 초기화 
  1: loading // 로딩
  2: loaded // 로딩이 완료된 
  3: interactive // 인터랙티브
  4: complete // 완료 
  */

// TODO xhrData 함수 만들기 method, url

// * 객체로 받기 실습
function xhrData(object) {
  // 객체 구조 분해 할당
  const { url, method, body, headers } = object;
  const xhr = new XMLHttpRequest();

  // * 비동기 통신 오픈
  xhr.open(method, url);

  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr; // * 객체 구조 분해 할당

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 성공");
        console.log(JSON.parse(response));
      }
    } else {
      console.error("통신 실패");
    }
  });

  // * 서버에 요청
  xhr.send(JSON.stringify(body));
}

xhrData({
  url: "https://jsonplaceholder.typicode.com/users",
  method: "GET",
  body: null,
  headers: {
    "Content-Type": "application/json",
  },
});

// xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
//   name: "ukss",
//   username: "seonguk",
//   email: "1872003115su@gmail.com",
//   address: {
//     street: "suyeong-ro",
//     suite: "Apt. 1102",
//     city: "Busan",
//     zipcode: "11111",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "010-3330-6035",
//   website: "ukss.org",
//   company: {
//     name: "LIKELION",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// });
