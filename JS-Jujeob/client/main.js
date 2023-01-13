import { jujeobData } from "./data/data.js";
import { clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert } from "./lib/index.js";

const submit = getNode("#submit");
const resultArea = getNode(".result");

function clickSubmitHandler(e) {
  e.preventDefault();
  let name = getInputValue("#nameField");

  if (!name) {
    showAlert(".alert", "이름을 입력해주세요", 3000);
    return;
  }

  if (isNumericString(name)) {
    showAlert(".alert", "제대로된 이름을 입력해주세요", 3000);
    return;
  }

  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

submit.addEventListener("click", clickSubmitHandler);
