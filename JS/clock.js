const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

    const Hour = String(date.getHours()).padStart(2,"0");
    const Minute = String(date.getMinutes()).padStart(2,"0");
    const Second = String(date.getSeconds()).padStart(2,"0");

    clock.innerText =`${Hour}:${Minute}:${Second}`;
}
//padStart() >> 문자열을 자릿수에 맞춰 채워주는 기능 "1" >> "01"


//setInterval(함수, 시간);
//지정된 시간 마다 지정된 함수를 실행시킨다.
getClock();
setInterval(getClock, 1000);

//setTimeout(함수, 시간);
// setTimeout(sayHello, 5000);


