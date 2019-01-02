// Simulated REST API

import { getTodoItemIndexFromId } from "./utils";
import { getState } from "./store";

const server = "http://localhost:8081";

// 1: new Promise (p1)
// 2: start http
// 3: .then => new Promise (p2)
// 4: return result
// ...
// x: p1 résolue
// x+1: exécuter le callback res => res.json()
// x+2: new Promise (p3)
// x+3: streaming du body de la response
// ...
// y: p3 résolue avec object
// y+1: p2 (=== result) résolue  avec object

export async function fetchItems() {
  const response = await fetch(`${server}/todos`, { method: "GET" });
  return response.json();
}

// Private API: not exported
function getMaxId() {
  const ids = getState().map(item => item.id);
  return Math.max(...ids);
}

export function createItem({ text, done = false }, onSuccess, onError) {
  setTimeout(() => {
    if (!text) {
      onError('Mandatory "text"');
    }
    const id = getMaxId() + 1;
    const item = { id: id, text: text, done: done };
    onSuccess(item);
  }, 400);
}

export function updateItem(id, updates, onSuccess, onError) {
  setTimeout(() => {
    const index = getTodoItemIndexFromId(id);
    const items = getState();
    if (items[index]) {
      const newItem = { ...items[index], ...updates };
      onSuccess(newItem);
    } else {
      onError("Item not found");
    }
  }, 500);
}

export function removeItem(id, onSuccess, onError) {
  setTimeout(() => {
    const index = getTodoItemIndexFromId(id);
    if (getState()[index]) {
      onSuccess();
    } else {
      onError("Item not found");
    }
  }, 300);
}
