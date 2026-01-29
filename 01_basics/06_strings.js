const name = "Sameer"
const repoCount = 50;

//console.log(name + repoCount + "Value")''

//String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//Declaration of String
const gameName = new String('Sameer');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("e"))

const newString = gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(1,4);
const reverseString = gameName.slice(-3,6); //slicing from reverse

console.log(anotherString);
console.log(reverseString);


const newString1 = "  Sameer   ";  //Extra space 

console.log(newString1);
console.log(newString1.trim()); //Removed Extra space

const url = "https://sameer.com/sameer%20Ram"

console.log(url.replace('%20','-')); //-> https://sameer.com/sameer-Ram

console.log(url.includes('sam')) //true

const display = new String('Sam-R-07');
console.log(display.split('-'))

const str = "Sameer"; //[ 'Sam', 'R', '07' ]
console.log(str.split("")); //[ 'S', 'a', 'm', 'e', 'e', 'r' ]


