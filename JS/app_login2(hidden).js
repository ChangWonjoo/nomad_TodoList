const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const link = document.querySelector("a");

//preventDefault()를 사용하기 위해서는 onLoginSubmit에 인자를 추가해줘야한다.
//인자가 추가되면, JS에서 알아서 tomato인자에 submit event에 관련된 정보를 채워서 넣어준다.
//관행적으로 tomato 자리에는 event로 작성한다.
function onLoginSubmit(event){
    console.log("form submitted");
    
    //event.defaultPrevented = true; //읽기 전용 속성으로 변경 불가하며, 위의 함수로만 조정이 된다.
    event.preventDefault();
    console.log(event);

    const username = loginInput.value;
    console.log(username);

    loginForm.classList.add(HIDDEN_CLASSNAME);

    //greeting.innerText = "Welcome, "+username;
    greeting.innerText = `Welcome ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

function handleLink(event){
    alert("link clicked");
    console.dir(event);
    event.preventDefault();
    
}

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLink);