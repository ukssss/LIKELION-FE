export function addClass(node, className) {
  if (typeof node === "string") node = getNode(node);
  if (typeof className !== "string") typeError("addClass 함수의 두 번째 인자는 문자 타입이어야 합니다");

  node.classList.add(className);
}
export function removeClass(node, className) {
  if (typeof node === "string") node = getNode(node);

  if (!className) {
    node.className = "";
    return;
  }

  if (typeof className !== "string") typeError("removeClass 함수의 두 번째 인자는 문자 타입이어야 합니다");

  node.classList.remove(className);
}

export function toggleClass(node, className) {
  if (typeof node === "string") node = getNode(node);
  if (typeof className !== "string") typeError("toggleClass 함수의 두 번째 인자는 문자 타입이어야 합니다");

  node.classList.toggle(className);
}

// 자바스크립트에선 객체의 key, value 값을 변수로 받기 위해서는 . 사용 X
// [ ] 각괄호 표기법

// 대상에게 속성을 받아서 이 속성이~ 라는 걸 보여줘야함.
function getCss(node, prop) {
  if (typeof node === "string") node = getNode(node);
  if (!(prop in document.body.style)) syntaxError("getCss 함수의 두 번째 인자는 문자 타입이어야 합니다");

  return getComputedStyle(node)[prop];
}

// 대상에게 원하는 css 속성을 추가 = set
function setCss(node, prop, value) {
  if (typeof node === "string") node = getNode(node);
  if (!(prop in document.body.style)) syntaxError("setCss 함수의 두 번째 인자는 문자 타입이어야 합니다");
  if (!value) syntaxError("setCss 함수의 세 번째 인자는 필수값 입니다.");

  node.style[prop] = value;
}

export const css = (node, prop, value) => (!value ? getCss(node, prop) : setCss(node, prop, value));
