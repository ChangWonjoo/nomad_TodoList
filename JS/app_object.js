const player = {
    name:"chang",
    points : 10,
    fat: true,
};

//object의 속성을 뽑아내는 2가지 방법
console.log(player);
console.log(player.name);//chang
console.log(player["name"]);//chang


//const Object 라도, 안의 내용물은 변경하거나 추가할 수 있다.
console.log(player.fat);//true
    player.fat = false;//속성 변경
console.log(player.fat);//false
    player.contry = "korea";//속성 추가
console.log(player);//속성에 country 추가됨

//속성 활용법 example
player.points = player.points + 15;
console.log(player.points);//25

//단순히 데이터를 나열시키는 array와 달리 속성명과 값이 매칭되므로, 속성을 통해 데이터를 일목요연하게 정리하고 다룰 수 있게 된다.
