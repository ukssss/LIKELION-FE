import { jujeobData } from "./data/data.js";
import { getInputValue, getNode, getRandom } from "./lib/index.js";

let a = 1;

const submit = getNode("#submit");

console.log(submit);

function clickSubmitHandler(e) {
  e.preventDefault();
  let name = getInputValue("#nameField");
  let list = jujeobData(name);

  console.log(list[getRandom(list.length - 1)]);
}

submit.addEventListener("click", clickSubmitHandler);
