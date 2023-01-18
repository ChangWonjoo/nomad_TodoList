const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(newTodo) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // console.log(event.target);
  // console.log(event.target.parentElement.innerText);
  // console.dir(event.target);
  
  const li = event.target.parentElement;
  console.log(li.id);
  // = console.log(event.target.parentElement.id);
  li.remove();

  //filter함수는 배열을 바꾸는게 아니라 필터를 적용한 또다른 배열을 만든다.
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));//필터 적용된 배열 받기
  saveToDos(toDos);//변경된 인스턴스를 DB에 덮어쓰기

  
  //this.parentElement.remove();
}

function paintToDo(newTodoObj) {
  //console.log(`i will paint ${newTodo}`);
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "X";

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  console.log(li);

  button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  //console.log(toDoInput.value);
  const newTodo = toDoInput.value;
  toDoInput.value = ""; // Delete all string in input form for TodoList

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };


  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);

  toDos = parsedToDos;// 작성된 리스트가 있으면, 불러와서 시작할 것
 
  //화살표함수 사용 방법
  parsedToDos.forEach(paintToDo);
}
