"use strict";

/* global $ */

let ITEMS = [];

// Init: load
// fetchItems available thanks to hoisting
fetchItems(
  items => {
    items.forEach(item => addOrReplaceTodoItem(item));
    $(document.body).addClass("loaded");
  },
  error => alert(error)
);

// Get reference to item object from its id
function getTodoItemIndexFromId(id) {
  const index = ITEMS.findIndex(item => item.id === Number(id));
  return index === -1 ? null : index;
}

// Useful function to find interesting data from a given element
function findTodoItemFromElement(e) {
  const $item = $(e).closest("[data-item-id]");
  const id = $item.attr("data-item-id");
  const index = getTodoItemIndexFromId(id);
  const item = ITEMS[index];
  return { $item: $item, id: id, index: index, item: item };
}

// Add or replace new item: inject html
function addOrReplaceTodoItem(item) {
  const clsEmpty = item.done ? "" : " is-empty";
  const text = item.text.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `
    <i class="toggle-todo-item icon like is-medium ${clsEmpty}"></i>
    <p>${text}</p>
    <i class="remove-todo-item icon close is-medium"></i>
  `;

  const index = getTodoItemIndexFromId(item.id);
  if (ITEMS[index]) {
    // replace
    ITEMS = ITEMS.map((original, i) => (i === index ? item : original));
    $(`.todo-items [data-item-id="${item.id}"]`).html(html);
  } else {
    // add
    ITEMS = [...ITEMS, item]; // ITEMS.concat([item])
    $(".todo-items").append(
      `<div class="todo-item" data-item-id="${item.id}">${html}</div>`
    );
  }
  updateStats();
}

// Re-compute counters
function updateStats() {
  const total = ITEMS.length;
  const done = ITEMS.reduce((nb, item) => nb + (item.done ? 1 : 0), 0);
  const pending = total - done;
  $(".counter.total").text(total);
  $(".counter.pending").text(pending);
  $(".counter.done").text(done);
}

// Toggle item
$(".todo-items").on("click", ".toggle-todo-item", e => {
  e.preventDefault();
  const found = findTodoItemFromElement(e.target);
  if (found.item) {
    updateItem(
      found.id,
      { done: !found.item.done },
      updatedItem => addOrReplaceTodoItem(updatedItem),
      error => alert(error)
    );
  }
});

// Remove item
$(".todo-items").on("click", ".remove-todo-item", e => {
  e.preventDefault();
  if (confirm("Sure? Like, REALLY sure? I mean it’ll be gone forever…")) {
    const found = findTodoItemFromElement(e.target);
    removeItem(
      found.id,
      () => {
        ITEMS = ITEMS.filter(item => item.id !== Number(found.id));
        found.$item.remove();
        updateStats();
      },
      error => alert(error)
    );
  }
});

// Form: add item
$("form.new-item").on("submit", e => {
  e.preventDefault();
  const $text = $(e.target).find('input[name="text"]');
  const text = $text.val();
  createItem(
    { text: text, done: false },
    createdItem => addOrReplaceTodoItem(createdItem),
    error => alert(error)
  );
  $text.val(""); // Reset field
});

// Fake REST API

function getMaxId() {
  const ids = ITEMS.map(item => item.id);
  return Math.max(...ids);
}

function createItem({ text, done = false }, onSuccess, onError) {
  setTimeout(() => {
    if (!text) {
      onError('Mandatory "text"');
    }
    const id = getMaxId() + 1;
    const item = { id: id, text: text, done: done };
    onSuccess(item);
  }, 400);
}

function updateItem(id, updates, onSuccess, onError) {
  setTimeout(() => {
    const index = getTodoItemIndexFromId(id);
    if (ITEMS[index]) {
      const newItem = { ...ITEMS[index], ...updates };
      onSuccess(newItem);
    } else {
      onError("Item not found");
    }
  }, 500);
}

function removeItem(id, onSuccess, onError) {
  setTimeout(() => {
    const index = getTodoItemIndexFromId(id);
    if (ITEMS[index]) {
      onSuccess();
    } else {
      onError("Item not found");
    }
  }, 300);
}

function fetchItems(onSuccess /*, onError*/) {
  setTimeout(() => {
    onSuccess([
      {
        id: 1,
        done: true,
        text: "List important parts of ES6"
      },
      {
        id: 2,
        done: true,
        text: "Prepare a plan for days 1 and 2"
      },
      {
        id: 3,
        done: true,
        text:
          "Find a nice way to explore those features, like an application coded in old-school JS and we’ll refactor it to use modern ways"
      },
      {
        id: 4,
        done: true,
        text: "Create the app"
      },
      {
        id: 5,
        done: false,
        text: "Inject some bugs in app, which would not happen with modern JS"
      },
      {
        id: 6,
        done: false,
        text: "Create git history of refactoring?"
      }
    ]);
  }, 2000);
}
