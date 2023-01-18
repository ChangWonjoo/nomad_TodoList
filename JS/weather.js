//https://openweathermap.org/api

const API_KEY = '22cb841342f5a5f087f3296478337369';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

function onGeoOk(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("You live in, ",latitude, longitude);

    const queryString = `?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const weatherInfo = WEATHER_URL+queryString;

    console.log(weatherInfo);//url을 통해 정보가 들어오는지 확인

    //fetch는 promise*라서 fetch함수로 실행한 내용을 일단 해놓고, 무엇을 할지는 then()을 이용해 지시한다.
    //*promise : 즉각 응답하는 것이 아닌, 응답 대기 이후 할 일을 하는 것
    fetch(weatherInfo).then(response => response.json()).then(data => {
        
        const city = document.getElementById("weather").children[0];
        const weather = document.getElementById("weather").children[1];
        
        city.innerText = data.name;
        weather.innerText =  `weather: ${data.weather[0].main} /  temperature: ${data.main.temp}`;
        console.log(city,weather,temper);
    });

}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}



navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
