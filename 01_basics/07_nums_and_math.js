const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(1));

let otherNum = 12.86;
console.log(otherNum.toPrecision(3));

otherNum = 123.86;
console.log(otherNum.toPrecision(3));

otherNum = 1234.86;
console.log(otherNum.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());

//___________________________MATHS_____________________________
console.log("___________________________MATHS_____________________________");

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.6));
console.log(Math.min(4,8,3,1));
console.log(Math.max(4,8,3,1));

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10 )+ 1); // for minimum value 1
console.log(Math.floor(Math.random()*10 )+ 1); // for getting single or less digit value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()* (max-min+1))+min)



