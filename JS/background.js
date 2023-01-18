const images = ["0.jpeg","1.jpeg","2.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];
//console.log(chosenImage);

//create img tag at JS
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;//src property create
console.log(bgImage);

document.body.appendChild(bgImage);