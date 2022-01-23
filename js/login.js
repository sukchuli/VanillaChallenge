const loginform = document.querySelector("#login-form");
const logoutform = document.querySelector("#logout-form");
const login = document.querySelector(".login");
const logout = document.querySelector(".logout");
const todo = document.querySelector(".todo");
const KEY_LOGIN_NAME = "loginname";
const KEY_CLASS_HIDDEN = "hidden";

function doLogin(event) {
  event.preventDefault();
  const loginName = loginform.querySelector("input");
  localStorage.setItem(KEY_LOGIN_NAME, loginName.value);
  logout.querySelector("span:first-child").innerText = `안녕하세요! ${loginName.value}`;
  
  loginName.value = "";
  login.classList.add(KEY_CLASS_HIDDEN);
  logout.classList.remove(KEY_CLASS_HIDDEN);
  todo.classList.remove(KEY_CLASS_HIDDEN);
}

function doLogout(event) {
    event.preventDefault();
    localStorage.removeItem(KEY_LOGIN_NAME);
    login.classList.remove(KEY_CLASS_HIDDEN);
    logout.classList.add(KEY_CLASS_HIDDEN);
    todo.classList.add(KEY_CLASS_HIDDEN);
}

const lsLoingName = localStorage.getItem(KEY_LOGIN_NAME);
if(lsLoingName === null || lsLoingName === "") {
    login.classList.remove(KEY_CLASS_HIDDEN);
} else {
    logout.querySelector("span:first-child").innerText = `안녕하세요! ${lsLoingName}`;
    logout.classList.remove(KEY_CLASS_HIDDEN);
    todo.classList.remove(KEY_CLASS_HIDDEN);
}
loginform.addEventListener("submit", doLogin);
logoutform.addEventListener("submit", doLogout);
