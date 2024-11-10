let selector = (ele) => document.querySelector(ele);
let allSelector = (ele) => document.querySelectorAll(ele);

const inputText = selector(".todo-input");
const addBtn = selector(".addBtn");
const todoItem = selector(".todo-item");

let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let today = `${day}/${month}/${year}`;
document.addEventListener("DOMContentLoaded", loadTodos);
addBtn.addEventListener("click", addTodoList);

function addTodoList(e) {
  let inputVal = inputText.value;
  if (inputVal.trim() == "") {
    return;
  }

  const todo = createElement(inputVal);
  todoItem.appendChild(todo);
  saveTodos();
  inputText.value = "";
}
function createElement(value) {
  const li = document.createElement("li");
  li.innerHTML = `
  <span class='todoText'>${value}</span>
  <span class='date'><i>Created at:</i> ${today}</span>
  <button class="delete-btn">Delete</button>
  `;
  li.querySelector("button").addEventListener("click", deleteTodo);
  return li;
}
function deleteTodo(e) {
  let parentELement = e.target.parentElement;
  parentELement.remove();
  saveTodos();
}

function saveTodos() {
  const todos = [];
  let todoItems = document.querySelectorAll(".todo-item li span");

  todoItems.forEach((todo) => {
    console.log(todo);
    todos.push(todo.textContent);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const storedTodos = localStorage.getItem("todos");

  if (storedTodos) {
    const todos = JSON.parse(storedTodos);

    todos.forEach((todo) => {
      const newTodo = createElement(todo);

      todoItem.appendChild(newTodo);
    });
  }
}
