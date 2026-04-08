//In JavaScript, coercion means JavaScript automatically converts one data type into another so an operation can continue. 
//JavaScript is a loosely typed language — variables don’t have fixed types. Because of that, JS often needs to convert values behind the scenes.
// How coercion behaves in different operations
// ➕ String Coercion with +
// If one side is a string, JS converts the other to a string.
//let numb =   // "37"
console.log(3 + "7")
// ➖ ✖ ➗ *Numeric Coercion with -, , /
// These operators expect numbers, so JS converts values to numbers.

console.log("7" - 3 )
console.log(true * 3)

// 🔄 Boolean Coercion in conditions
// Any value in an if, while, or logical operator is coerced to boolean.
if ("hello") console.log("Runs"); // truthy
if (0) console.log("Doesn't run"); // falsy
//Confusing Part
//Because JS converts types before comparing.
//This is why developers prefer === (strict equality), which avoids coercion.

console.log(0=="0") //true
console.log(0==false)//true