import { jujeobData } from "./data/data.js";
import { clearContents, getInputValue, getNode, getRandom, insertLast } from "./lib/index.js";

let a = 1;

const submit = getNode("#submit");
const resultArea = getNode(".result");

console.log(submit);

function clickSubmitHandler(e) {
  e.preventDefault();
  let name = getInputValue("#nameField");

  if (!name) {
    alert("이름을 입력해주세요");
    return;
  }

  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

submit.addEventListener("click", clickSubmitHandler);
