const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function onLoginSubmit(event) {
  console.log("onLoginSubmit");
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  console.log("paintGreetings");
  greeting.innerHTML = `Hello ${username}<br>`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  const logoutBtn = document.createElement("button");
  logoutBtn.id="logoutBtn";
  logoutBtn.innerHTML="logout";

  console.log(logoutBtn);
  greeting.appendChild(logoutBtn);
  
  logoutBtn.addEventListener("click", handleLogout);
}

function handleLogout(){
  console.log(`logoutBtn clicked`);

  localStorage.removeItem(USERNAME_KEY);

  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
}

