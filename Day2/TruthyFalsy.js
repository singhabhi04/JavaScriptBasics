// JavaScript automatically converts values to true or false when used in a condition.
// - Values that behave like false → Falsy
// - Everything else → Truthy
// This conversion happens in:
// - if statements
// - loops
// - logical operators (&&, ||, !)
// - ternary operators
// - array filterin


let firstname = 'Abhishek'

console.log(Boolean(firstname))

// ❌ Falsy values (only 8 in JavaScript)
// JavaScript has exactly eight falsy values:
// - false
// - 0
// - -0
// - 0n (BigInt zero)
// - "" (empty string)
// - null
// - undefined
// - NaN
// ✔ Truthy values (everything else)
// Any value not in the falsy list is truthy.
// Examples:
// - "hello"
// - " " (space string)
// - "0" (string zero)
// - [] (empty array)
// - {} (empty object)
// - function(){}
// - 42
// - -5
// - true


const arr = [0, 1, "", "Abhi", null, 5];

const truthyValues = arr.filter(Boolean);

console.log(truthyValues);
// [1, "Abhi", 5]

console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean(NaN));

