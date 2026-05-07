# ⚡ JavaScript Quick Cheat Sheet

**One-page reference for quick lookup during coding or exams**

---

## Variables & Types
```javascript
// Variable Declaration
const x = 5;        // immutable
let y = 10;         // mutable, block-scoped
var z = 15;         // avoid (function-scoped)

// Primitive Types
typeof 42           // "number"
typeof "text"       // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (BUG!)
typeof Symbol()     // "symbol"

// Type Conversion
Number("42")        // 42
String(42)          // "42"
Boolean(0)          // false
```

---

## Operators
```javascript
// Comparison
5 == "5"            // true (loose equality - coercion)
5 === "5"           // false (strict equality - NO coercion)
5 != "5"            // false
5 !== "5"           // true

// Logical
true && false       // false
true || false       // true
!true               // false

// Ternary
age >= 18 ? "Adult" : "Minor"
```

---

## Control Flow
```javascript
// if/else
if (condition) {
} else if (condition2) {
} else {
}

// switch
switch (value) {
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    default: console.log("Other");
}

// Loops
for (let i = 0; i < 10; i++) { }
for (const item of array) { }
array.forEach(item => { })
while (condition) { }
```

---

## Arrays - Creation & Access
```javascript
const arr = [1, 2, 3];
arr[0]              // 1
arr.at(-1)          // 3 (last element)
arr.length          // 3
```

## Arrays - Mutating Methods
```javascript
arr.push(4)         // Add to end: [1,2,3,4]
arr.pop()           // Remove from end: [1,2,3]
arr.unshift(0)      // Add to start: [0,1,2,3]
arr.shift()         // Remove from start: [1,2,3]
arr.splice(1, 1)    // Remove/add at index
arr.reverse()       // Reverse: [3,2,1]
arr.sort()          // Sort (alphabetic by default)
arr.sort((a,b) => a-b) // Sort numbers ascending
```

## Arrays - Non-Mutating Methods
```javascript
arr.slice(1, 3)     // Extract: [2,3]
arr.concat([4,5])   // Combine: [1,2,3,4,5]
arr.map(x => x*2)   // Transform: [2,4,6]
arr.filter(x => x>1) // Keep matching: [2,3]
arr.find(x => x>2)  // First match: 3
arr.findIndex(x => x>2) // Index of match: 2
arr.reduce((acc,x) => acc+x, 0) // Accumulate: 6
arr.join("-")       // To string: "1-2-3"
arr.includes(2)     // Check exists: true
arr.indexOf(2)      // Find index: 1
```

---

## Strings - Creation & Access
```javascript
const str = "Hello";
str[0]              // "H"
str.length          // 5
`Hello ${name}`     // Template literal
```

## Strings - Methods
```javascript
str.toUpperCase()   // "HELLO"
str.toLowerCase()   // "hello"
str.includes("ell") // true
str.indexOf("l")    // 2
str.slice(0, 3)     // "Hel"
str.substring(0, 3) // "Hel"
str.trim()          // Remove whitespace
str.split("")       // To array: ['H','e','l','l','o']
str.replace("l", "L") // "HeLlo" (first only)
str.replaceAll("l", "L") // "HeLLo" (all)
str.repeat(3)       // "HelloHelloHello"
str.startsWith("He") // true
str.endsWith("lo")  // true
str.charAt(0)       // "H"
str.charCodeAt(0)   // 72 (ASCII)
```

---

## Functions
```javascript
// Declaration
function add(a, b) { return a + b; }

// Expression
const add = function(a, b) { return a + b; };

// Arrow (ES6)
const add = (a, b) => a + b;
const square = x => x * x;
const greet = () => "Hello";

// With block body
const add = (a, b) => { return a + b; };
```

## Callbacks & Higher-Order Functions
```javascript
// Callback
function execute(fn) { return fn(); }
execute(() => 42); // 42

// Returning function
const makeAdder = n => x => x + n;
const add5 = makeAdder(5);
add5(10); // 15

// Closure
function counter() {
    let count = 0;
    return () => ++count;
}
const c = counter();
c(); // 1
c(); // 2
```

---

## Object Basics
```javascript
// Create
const obj = { name: "John", age: 30 };
const obj2 = new Object();

// Access
obj.name            // "John"
obj["name"]         // "John"

// Modify
obj.age = 31;
obj.city = "NYC";   // Add new property

// Delete
delete obj.age;

// Check property
"name" in obj       // true
obj.hasOwnProperty("name") // true

// Keys/Values
Object.keys(obj)    // ["name", "age"]
Object.values(obj)  // ["John", 30]
Object.entries(obj) // [["name", "John"], ["age", 30]]
```

---

## Useful Array Patterns
```javascript
// Create array of numbers
Array.from({length: 5}, (_, i) => i) // [0,1,2,3,4]
[...Array(5).keys()]                 // [0,1,2,3,4]

// Duplicate array
const copy = [...original];

// Flatten array
const flat = arr.flat();
const flat2 = arr.flat(2);

// Remove duplicates
const unique = [...new Set(arr)];

// Combine multiple maps/filters
arr
    .filter(x => x > 0)
    .map(x => x * 2)
    .reduce((sum, x) => sum + x, 0)
```

---

## Common Patterns
```javascript
// Check if value is truthy/falsy
if (value) { }      // truthy
if (!value) { }     // falsy

// Default values
const x = value || 10;
const y = value ?? 10; // nullish coalescing

// Destructuring (basics)
const [a, b] = [1, 2];
const {name, age} = {name: "John", age: 30};

// Spread operator
const arr2 = [...arr1];
const obj2 = {...obj1};

// Short property names
const name = "John";
const age = 30;
const obj = {name, age}; // {name: "John", age: 30}

// Method shorthand
const obj = {
    name: "John",
    greet() { return `Hello, ${this.name}`; }
};
```

---

## Falsy & Truthy Values
```javascript
// 8 Falsy values (everything else is truthy)
false, 0, -0, 0n, "", null, undefined, NaN

// Falsy checks
if (!0) { }         // true
if (!"") { }        // true
if (!null) { }      // true
if (!undefined) { } // true

// Remove falsy values
arr.filter(Boolean) // [1, 2, true, "text"]
```

---

## DOM Basics (Quick Reference)
```javascript
// Select elements
document.getElementById("id")
document.querySelector(".class")
document.querySelectorAll(".class")
document.getElementsByTagName("div")

// Modify content
el.textContent = "text"
el.innerHTML = "<b>text</b>"

// Modify attributes
el.id = "newId"
el.className = "active"
el.setAttribute("data-x", "value")
el.getAttribute("data-x")

// Modify styles
el.style.color = "red"
el.style.display = "none"

// Add/remove classes
el.classList.add("active")
el.classList.remove("active")
el.classList.toggle("active")

// Events
el.addEventListener("click", () => {})
el.onclick = () => {}
```

---

## Async Basics (Quick Reference)
```javascript
// setTimeout
setTimeout(() => console.log("Later"), 2000);

// Promise (basic)
new Promise((resolve, reject) => {
    if (success) resolve(data);
    else reject(error);
});

// async/await
async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
```

---

## Debugging
```javascript
console.log("message")      // Basic log
console.table(arr)          // Table format
console.time("label")       // Start timer
console.timeEnd("label")    // End timer
debugger;                   // Breakpoint

// Check type
typeof value
Array.isArray(value)
value instanceof Array
value === null

// Check value
console.log({value})        // Labeled output
console.assert(condition, "msg")
```

---

## Quick Do's and Don'ts

✅ **DO:**
- Use `===` instead of `==`
- Use `const` by default
- Use arrow functions `=>`
- Use `map()`, `filter()`, `reduce()`
- Use template literals with backticks
- Use `forEach()` to loop arrays
- Check `Array.isArray()` to verify arrays

❌ **DON'T:**
- Don't use `var`
- Don't forget `break` in switch
- Don't use `==` for comparison
- Don't assume `sort()` works on numbers
- Don't mix `slice()` and `splice()`
- Don't modify arrays inside `forEach()`
- Don't compare NaN with `===` (use `Number.isNaN()`)

---

**Print this out and keep it handy! 📌**
