// TODO get 과 set 을 한번에 쓸 수는 없을까?

// * get 함수 만들기
function getAttr(node, prop) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  //node = document.querySelector(".first");

  return node.getAttribute(prop);
}

// * set 함수 만들기
// computed property
function setAttr(node, prop, value) {
  // validation : 확인
  if (typeof node === "string") node = getNode(node);
  if (typeof prop !== "string") throw new TypeError("setAttr 함수의 두 번째 인자는 문자 타입이어야 합니다 ");

  if (prop.includes("data")) {
    let rest = prop.slice(5);
    node.dataset[rest] = value;
  }

  if (!value) throw new SyntaxError("setAttr 함수의 세 번째 인자는 필수값입니다");
  node.setAttribute(prop, value);
}

// first 노드 안에 data-value 의 값으로 hello 를 집어넣었다

// * common 함수 만들기
function attr(node, prop, value) {
  // if (!value) {
  //   return getAttr(node, prop);
  // } else {
  //   setAttr(node, prop, value);
  // }

  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}
