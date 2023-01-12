const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];

// TODO 네비게이션에게 이벤트를 건다.
// TODO 핸들러를 연결한다.
// TODO 이벤트 객체에서 타겟을 찾는다.

const navigation = getNode(".navigation");
// const list = getNodes(".navigation > li");
const visualImage = getNode(".visual img");

function makeArray(arrayLike) {
  // * 진짜 배열로 만드는 함수
  return Array.from(arrayLike);
}

function handler(e) {
  let target = e.target.closest("li");
  // let targetA = e.target.closest("a");
  if (!target) return;

  let list = makeArray(navigation.children); // * 유사배열을 배열로 변환
  let index = attr(target, "data-index");

  // Array.from(list);
  // let arr = [... list];
  // Array.prototype.slice.call(list)

  // TODO console.log(navigation);
  // TODO 내가 선택한 li 에게 is-active 클래스를 넣어주세요.
  // TODO 내가 선택하지 않은 li에게 is-active 클래스를 제거해주세요.

  // * 모든 li 에서 "is-active" 제거
  list.forEach((item) => removeClass(item, "is-active"));

  // * 지정한 li 에 "is-active" 추가
  addClass(target, "is-active");
  function handler(e) {
    let target = e.target.closest("li");
    if (!target) return;
    let list = makeArray(navigation.children); // * 유사배열을 배열로 변환
    let index = attr(target, "data-index");

    // Array.from(list);
    // let arr = [... list];
    // Array.prototype.slice.call(list)

    // TODO console.log(navigation);
    // TODO 내가 선택한 li 에게 is-active 클래스를 넣어주세요.
    // TODO 내가 선택하지 않은 li에게 is-active 클래스를 제거해주세요.

    // * 모든 li 에서 "is-active" 제거
    list.forEach((item) => removeClass(item, "is-active"));

    // * 지정한 li 에 "is-active" 추가
    addClass(target, "is-active");

    // TODO 비주얼 안에 있는 이미지를 가져온다
    // TODO 이미지의 src 속성에 접근한다
    // TODO src의 값을 index로 바꾼다

    attr(visualImage, "src", `./assets/part01/visual${index}.jpg`);
    attr(visualImage, "alt", data[index - 1].alt);
    //visualImage.src = `./assets/part01/visual${index}.jpg`;
  }

  // TODO 비주얼 안에 있는 이미지를 가져온다
  // TODO 이미지의 src 속성에 접근한다
  // TODO src의 값을 index로 바꾼다

  attr(visualImage, "src", `./assets/part01/visual${index}.jpg`);
  attr(visualImage, "alt", data[index - 1].alt);
  //visualImage.src = `./assets/part01/visual${index}.jpg`;
}

navigation.addEventListener("click", handler);

// const li_1 = getNode(".navigation > li:nth-child(1)");
// const li_2 = getNode(".navigation > li:nth-child(2)");

// li_1.addEventListener("click", (e) => {});
// li_2.addEventListener("click", (e) => {
//   li_1.classList.add;
// });
