// # 호랭이 이야기

// 지구에서 쫒겨난 타이거 ->
// 우주에 떠다니다가 외계인한테 붙잡혀서 끌려감 ->
// 고문 받으면서 지구에 대한 정보 물음->
// 더 많은 정보 캐기 위해 호랑이 다시 지구에 보냄 ->
// 그리고 정보 전달 -> 끝

// 외계인은 정이 없어서 호랑이는 누군지 안궁금하고 정보만 중요함

function earth() {
  let water = true;
  let apple = {
    founder: "Steve Jobs",
    ceo: "Tim Cook",
    product: ["iphone", "macbook", "macStudio", "appleWatch"],
  };
  let o2 = 9999;

  // function tiger() {
  //   console.log(water,o2);
  // }

  // return tiger;

  return function () {
    console.log(water, o2);
  };
}

const ufo = earth();

function handler() {
  let isClicked = false;

  return function () {
    if (isClicked === true) {
      this.style.background = "transparent";
    } else {
      this.style.background = "red";
    }

    isClicked = !isClicked;
  };
}

document.querySelector(".first").addEventListener("click", handler());
