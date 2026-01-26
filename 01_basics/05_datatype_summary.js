// Primitive 

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //when value is not declared the value is undefined untill value is assigned

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); //false

const bigNumber = 464648431321655453347n; //BigInt



//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["Ironman", "Batman", "Superman", "Thor"];

let footballers = {
    name:"Ronaldo",
    age: 41,
}

function myFunc(){
    console.log("My function")
}

const myFunc1 = ()=>{
    console.log("My arrow function")
}

myFunc();
myFunc1();


console.log(typeof(myFunc)); //typeof tell the datatype of variable

//The datatypes of non-primitives are object