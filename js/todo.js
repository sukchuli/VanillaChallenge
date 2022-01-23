const todoform = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-form input");
const todolist = document.querySelector("#todo-list");
const KEY_TODOS = "todos";
let todoArr = [];

function deleteTodo(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    todoArr = todoArr.filter((todo) => todo.id !== parseInt(li.id));
    li.remove();
    saveTodo();
}

function saveTodo() {
    localStorage.setItem(KEY_TODOS, JSON.stringify(todoArr));
}

function printDoto(newTodoObj) {
    const todos = todolist.querySelector("ul");
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    li.innerText = newTodoObj.text;
    li.id = newTodoObj.id;
    delBtn.innerText = "삭제";
    delBtn.addEventListener("click", deleteTodo);
    li.appendChild(delBtn);
    todos.appendChild(li);
    todoinput.value = "";
}


function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoinput.value;
    const newTodoObj = {
        id : Date.now(),
        text : newTodo
    };
    todoinput.value = "";
    todoArr.push(newTodoObj);
    printDoto(newTodoObj);
    saveTodo();
}

todoform.addEventListener("submit", todoSubmit);

const lsTodos = localStorage.getItem(KEY_TODOS);
if(lsTodos !== null) {
    const lsTodosParse = JSON.parse(lsTodos);
    todoArr = lsTodosParse;
    lsTodosParse.forEach(printDoto);
}