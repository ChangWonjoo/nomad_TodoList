const h1 = document.querySelector(".hello:first-child h1");


function handleTitleClick(){
    console.log("h1 was clicked");
    h1.style.color = "red";
}

function handleMouseEnter(){
    console.log("Mouse entered");
    h1.innerText = "Mouse is Here!";
}

function handleMouseLeave(){
    console.log("Mouse leaved");
    h1.innerText = "Mouse is Gone!";

}

//어떤 이벤트를 리슨할 것인지 적어줘야 한다.
//펑션() 형태가 아닌 펑션 이름만을 넘겨줘서, 클릭할 때만 실행될 수 있게한다. ()를 넣지않는 것에 주의.
// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// 어싸인 형태로도 이벤트를 받을 수 있다.
h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave;


console.dir(h1);


//창 크기 변경 이벤트 감지
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize", handleWindowResize);


//카피 이벤트 감지
function handleWindowCopy(){
 alert("Don't Copy it");
};

window.addEventListener("copy", handleWindowCopy);



//wifi 감지
function handleWindowOffline(){
    alert("SOS no internet!");
}

function handleWindowOnline(){
    alert("All Good!");
}

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
