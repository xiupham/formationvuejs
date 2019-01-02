import { getState } from "./store";

// Get reference to item object from its id
export function getTodoItemIndexFromId(id) {
  const index = getState().findIndex(item => item.id === Number(id));
  return index === -1 ? null : index;
}

export function unused() {
  return 42;
}
