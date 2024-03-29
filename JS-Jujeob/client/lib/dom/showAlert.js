import { getNode } from "./getNode.js";
import { addClass, removeClass } from "./css.js";

export function showAlert(node, text = "Error !", timeout = 1500) {
  if (typeof node === "string") node = getNode(node);
  node.textContent = text;

  addClass(node, "is-active");
  setTimeout(() => {
    removeClass(node, "is-active");
  }, timeout);
}
