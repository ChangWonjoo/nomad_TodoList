
//make function
function sayHello(name, age) {
    console.log("hello my name is"+ name +"and I'm"+ age);
}

//call function
sayHello("chang", 32);


//function in Object
const player = {
    name : "nico",
    sayHello : function (name) {
        console.log(name+", hello!");
    }
}

//use function in Object
player.sayHello("lynn");



