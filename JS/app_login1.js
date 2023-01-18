// 1. login-form 이라는 id를 가진 <div>를 찾은 뒤, 세부 엘리먼트를 가져오는 방법
// const loginForm = document.getElementById("login-form");

// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");


// 2. (권장)처음부터 세부 엘리먼트까지 가져오는 방법
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick(){
    console.log("loginBtn clicked");

    const username = loginInput.value;
    console.log(username);

    // //username validation
    // //하지만 이러한 내용은 대부분 HTML 의 <form>에서 해결할 수 있다(단, <form>없이 <input>만으로는 작동하지 않는다.)
    // const username = loginInput.value;
    // if(username === ""){
    //     alert("Please write your name");
    // }else if(username.length > 15){
    //     alert("Your name is too long");
    // }


}

//// login button을 <form>의 <input type="submit">으로 바꾸었기 때문에 addEventListener필요 없어짐.
// loginButton.addEventListener("click", handleLoginBtnClick);




// generally building process 
//HTML : create element  
// >> JS : get element >> JS : EventListening&Function  
// >> CSS : overlap Style