const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

let todoItems = [];

function addTodo(text) {
  todoItems.push(text);
}

function appendTodo(text) {
  const li = document.createElement("li");
  li.innerText = text;
  todoList.appendChild(li);
}

addTodoButton.addEventListener("click", function() {
  let todoText = todoInput.value;
  if (todoText === '') {
    alert('Please enter a text')
    todoInput.focus()
  } else {
      addTodo(todoText);
      appendTodo(todoText);
      todoInput.value = '';
      todoInput.focus();
  }
});














// let todoItems = [];

// function addTodo(text) {
//   todoItems.push(text);
// }

// function appendTodo(text) {
//   const li = document.createElement("li");
//   li.innerText = text;
//   todoList.appendChild(li);
// }

// addTodoButton.addEventListener("click", function() {
//   const todoText = todoInput.value;
//   addTodo(todoText);
//   appendTodo(todoText);
//   todoInput.value = '';
//   todoInput.focus();
// });

