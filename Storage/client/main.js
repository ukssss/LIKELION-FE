import { getNode, loadStorage, saveStorage, deleteStorage } from "./lib/index.js";

const textField = getNode("#textField");
const deleteBtn = getNode(".buttons > input:nth-child(2)");

// 새로고침할 경우 Storage 에서 key 값이 "area" 인 데이터 textField 에 출력
loadStorage("area").then((res) => {
  textField.value = res;
});

// textField 에 값을 입력하면 Storage 에 key 값이 "area" 인 데이터 저장
function inputHandler(e) {
  saveStorage("area", textField.value);
}

// Storage 에 저장된 key 값이 "area" 인 데이터 삭제
function deleteHandler(e) {
  deleteStorage("area", textField.value);
}

textField.addEventListener("input", inputHandler);
deleteBtn.addEventListener("click", deleteHandler);
