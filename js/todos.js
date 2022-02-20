const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoForm input");
const addTodoBtn = document.querySelector("#addTodoBtn");
let TODO_DATA = [];

//HTML str Append Function
function appendHtml(el, str) {
  var div = document.createElement("div");
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}

//Append Todo List
function addTodo(info) {
  if (isNull(info)) return;
  const checked = info.isCompleted ? "checked" : "";
  let html_li = `<li id="${info.id}" class="list-group-item list_bg"> 
      <input class="form-check-input me-1" type="checkbox"  aria-label="${info.todo}" onclick="changeComplet(event);" ${checked}> 
      ${info.todo} 
      <button type="button" class="btn-close float-md-end" aria-label="Close" onclick="deleteTodo(event)"></button>
    </li>`;

  const listUl = document.querySelector("#todoListUl");
  appendHtml(listUl, html_li);
}

//Change Complete Todo List
function changeComplet(e) {
  const todoInfo = TODO_DATA.find(
    (todo) => String(todo.id) === e.target.parentElement.id
  );
  todoInfo["isCompleted"] = true;
  setStorage(LOGINED_DATA.email, TODO_DATA);
}

//Delete Todo List
function deleteTodo(e) {
  TODO_DATA = TODO_DATA.filter(
    (todo) => String(todo.id) !== e.target.parentElement.id
  );
  e.target.parentElement.remove();
  setStorage(LOGINED_DATA.email, TODO_DATA);
}

//Load Todo List
function loadTodoList() {
  if (isLogin()) {
    TODO_DATA = getStorage(LOGINED_DATA.email);
    if (!isNull(TODO_DATA)) {
      TODO_DATA.forEach((todoInfo) => {
        addTodo(todoInfo);
      });
    } else {
      TODO_DATA = [];
    }
  }
}

//Form Submit Event Handler
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!isLogin()) {
    alert("Sorry!! Login first.");
    return;
  }

  const todoInfo = {
    id: Date.now(),
    todo: todoInput.value,
    isCompleted: false,
    wDate: new Date(),
  };
  todoInput.value = "";
  TODO_DATA.push(todoInfo);
  setStorage(LOGINED_DATA.email, TODO_DATA);

  addTodo(todoInfo);
});

// Page Onload Event!
window.addEventListener("load", () => {
  //loadTodoList();
});
