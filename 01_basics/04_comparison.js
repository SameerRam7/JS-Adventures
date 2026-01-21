// "2" > 1
// ">" triggers numeric comparison, so "2" is converted to number 2
// 2 > 1 → true
console.log("2" > 1); // true



// "02" > 1
// "02" is also converted to number → 2
// 2 > 1 → true
console.log("02" > 1); // true



// null > 0
// For relational operators, null is converted to number
// null → 0
// 0 > 0 → false
console.log(null > 0); // false



// null == 0
// == has special rules
// null only equals undefined, nothing else
// null == 0 → false
console.log(null == 0); // false



// null >= 0
// >= uses numeric comparison
// null → 0
// 0 >= 0 → true
console.log(null >= 0); // true



// undefined == 0
// undefined only loosely equals null
// undefined == 0 → false
console.log(undefined == 0); // false



// undefined > 0
// undefined is converted to NaN
// NaN > 0 → false
console.log(undefined > 0); // false



// undefined < 0
// undefined → NaN
// NaN < 0 → false
console.log(undefined < 0); // false



// "2" === 2
// Strict equality: no type conversion
// string !== number → false
console.log("2" === 2); // false
