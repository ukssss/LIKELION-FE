/* readyState
  0: uninitalized // 초기화 
  1: loading // 로딩
  2: loaded // 로딩이 완료된 
  3: interactive // 인터랙티브
  4: complete // 완료 
  */

// TODO xhrData 함수 만들기 method, url

// * 객체로 받기 실습
function xhrData({
  url = "",
  method = "GET",
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
}) {
  const xhr = new XMLHttpRequest();

  // * 비동기 통신 오픈
  xhr.open(method, url);

  // Object.entries(headers).forEach(([key, value]) => {
  //   xhr.setRequestHeader(key, value);
  // });

  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr; // * 객체 구조 분해 할당

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 성공");
        onSuccess(JSON.parse(response));
        console.log();
      }
    } else {
      if (readyState === 4) {
        onFail("통신 실패");
      }
    }
  });

  // * 서버에 요청
  xhr.send(JSON.stringify(body));
}

xhrData({
  // * 데이터 파일에서 id 값이 "1" 인 데이터를 가져오기 (GET)
  url: "https://jsonplaceholder.typicode.com/users/1",
  onSuccess: (result) => {
    console.log(result);
  },
  onFail: (err) => {
    console.error(err);
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

/* 
let movePage = function (주소,성공,실패){
  // 조건에 따라 조건이 잘 맞으면 성공() || 실패()
  if(주소 === '네이버'){
    성공(주소);
  }else{
    실패();
  }
};
movePage(
  '네이바',
  (주소)=>{
    console.log('3초후 '+ 주소 +'로 이동합니다.');
    setTimeout(() => {
      window.location.href = 'https://www.naver.com/'
    }, 3000);
  }
  ,
  ()=>{
    console.log('잘못된 주소를 입력했습니다.');
  })
 */
