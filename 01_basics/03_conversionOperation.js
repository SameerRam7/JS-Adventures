//Number
let score = "Sameer";

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);


//Converting string into number 
//"33" => 33
//"33ad" => NaN -> Not a Number
//true => 1 , false => 0

//Boolean
let isLoggedIn = "Sameer";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

//1=> true; 0=> false
//"" => false
//"Sameer" => true

//String
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);


//*************************** Operations ******************************* */

console.log("__________________________________");


/**
 JavaScript evaluates expressions from left to right and + has a special role. It is both:
addition operator
string concatenation operator
Once a string is involved, + becomes concatenation.
 */

console.log(2+2 + " 2+2") //left to right and + has a special role.
console.log("2+2="+ 2+2) //Once a string is involved, + becomes concatenation.
console.log("2+2="+(2+2))
console.log(2+2); //Pure numbers, so normal arithmetic
console.log("2-2=" + 2-2) //The - operator only works with numbers. So JavaScript tries to convert "2-2=2" into a number. But: Number("2-2=2") → NaN    and then NaN - 2 → NaN  OUTPUT: NaN

console.log("2-2="+(2-2))

console.log(2-2);
console.log("2*2=" + 2*2)
console.log("2**3=" + 2**3)
console.log("2/2=" + 2/2)
console.log("2%3=" + 2%3)


//*************************************************** */
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"s
