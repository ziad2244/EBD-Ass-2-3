// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

export function renderItems(list) {
  const element = document.querySelector("#list");
  element.replaceChildren();

  for (const item of list) {
    const row = document.createElement("li");
    row.classList.add("row");
    row.textContent = `${item.name} (${item.category})`;
    element.append(row);
  }
}

export function matching() {
  return items.filter((item) => item.category === "electronics");
}

export function start() {
  renderItems(items);
  const button = document.querySelector("#pick");
  if (wiredButtons.has(button)) {
    return;
  }
  wiredButtons.add(button);
  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

const wiredButtons = new WeakSet();
