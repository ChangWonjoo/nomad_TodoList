const h1 = document.querySelector("div.hello:first-child h1");

console.log(h1);




function handleTitleClick(){

    const clickedClass = "active";

    //console.log(h1.classList.contains(clickedClass));
    // //classList.contains(); 태그안에 ()안에 있는 클래스가 명시되어있는지 확인 후, boolean리턴
    // //단, contains()는 class를 복수로 넣어서 사용할 수는 없고, add/remove에서는 복수 선택이 가능함.
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove("active");
    // }else{
    //     h1.classList.add("active","sexy-font");
    // }

    //위의 if-else문을 toggle()로 통합할 수 있다.
    h1.classList.toggle(clickedClass);
    
}

h1.addEventListener("click",handleTitleClick);
