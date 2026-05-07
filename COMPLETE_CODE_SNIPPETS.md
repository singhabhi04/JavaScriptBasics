# 📚 Complete JavaScript Programs - Code Snippets Reference

**Organized collection of all JavaScript programs from your workspace**

---

## Table of Contents
1. [JavaScript Basics](#1-javascript-basics)
2. [Loops & Conditionals](#2-loops--conditionals)
3. [Array Methods](#3-array-methods)
4. [String Methods](#4-string-methods)
5. [Functions & Callbacks](#5-functions--callbacks)
6. [Practice Programs](#6-practice-programs)

---

## 1. JavaScript Basics

### Primitive Data Types
**File: `JavaScript_Basics/PrimitiveDataTypes.js`**

```javascript
console.log("JMS Randhir Singh")
firstname="Abhishek Singh"
age =35
isMarried = true
lastname =undefined;
webdriver = null;

console.log(typeof(firstname))   // "string"
console.log(typeof(age))         // "number"
console.log(typeof(isMarried))   // "boolean"
console.log(typeof(lastname))    // "undefined"
console.log(typeof(webdriver))   // "object" (bug in JS)

// undefined - declared but not assigned
let fn;
console.log(fn)                  // undefined
console.log(typeof(fn))          // "undefined"

// ReferenceError: ln is not defined
// console.log(ln)
```

**Key Concepts:**
- Primitive types: string, number, boolean, null, undefined
- `typeof` operator to check types
- `typeof null` returns "object" (known bug)

---

### Type Coercion
**File: `JavaScript_Basics/Coercion.js`**

```javascript
// String Coercion with + operator
console.log("5" + 2)        // "52" (concatenation)
console.log("5" + 2 + 1)    // "521"
console.log(2 + 1 + "5")    // "35" (math first, then concat)

// Numeric Coercion (-, *, /, %)
console.log("10" - 2)       // 8
console.log("10" * 2)       // 20
console.log("10" / 2)       // 5

// Boolean Coercion in conditionals
if ("text") { console.log("truthy"); }     // executes
if (1) { console.log("truthy"); }          // executes
if (0) { console.log("falsy"); }           // doesn't execute
if ("") { console.log("falsy"); }          // doesn't execute
```

---

### Data Type Conversion
**File: `JavaScript_Basics/DataTypeConversion.js`**

```javascript
// Explicit String Conversion
const num1 = 42;
const str1 = String(num1);
console.log(str1)           // "42"
console.log(typeof str1)    // "string"

// Explicit Number Conversion
const str2 = "99";
const num2 = Number(str2);
console.log(num2)           // 99
console.log(typeof num2)    // "number"

// String to Number with parsing
const numStr = "123abc";
console.log(parseInt(numStr, 10))   // 123 (parses leading digits)
console.log(Number(numStr))         // NaN (strict conversion)

// NaN (Not-a-Number)
console.log(Number("hello"))        // NaN
console.log(typeof NaN)             // "number" (confusing!)
console.log(NaN === NaN)            // false
console.log(Number.isNaN(NaN))      // true (correct check)
```

---

### Equality Operations
**File: `JavaScript_Basics/EualityOperation.js`**

```javascript
// Loose Equality (==) - TYPE COERCION
console.log(5 == "5")               // true (string converted to number)
console.log(0 == false)             // true
console.log("" == 0)                // true
console.log(null == undefined)      // true (special case)
console.log(null == 0)              // false

// Strict Equality (===) - NO COERCION
console.log(5 === "5")              // false
console.log(0 === false)            // false
console.log(null === undefined)     // false

// BEST PRACTICE: Use === always!
if (age === 18) { }  // correct
if (age == 18) { }   // risky!
```

---

### Truthy & Falsy
**File: `JavaScript_Basics/TruthyFalsy.js`**

```javascript
// 8 Falsy Values in JavaScript:
// false, 0, -0, 0n, "", null, undefined, NaN

// Check falsy values
const falsy = [false, 0, -0, 0n, "", null, undefined, NaN];

console.log(false ? "truthy" : "falsy")      // "falsy"
console.log(0 ? "truthy" : "falsy")          // "falsy"
console.log("" ? "truthy" : "falsy")         // "falsy"
console.log(null ? "truthy" : "falsy")       // "falsy"
console.log(undefined ? "truthy" : "falsy")  // "falsy"
console.log(NaN ? "truthy" : "falsy")        // "falsy"

// Everything else is TRUTHY:
console.log(1 ? "truthy" : "falsy")          // "truthy"
console.log("text" ? "truthy" : "falsy")     // "truthy"
console.log([] ? "truthy" : "falsy")         // "truthy"
console.log({} ? "truthy" : "falsy")         // "truthy"

// Remove falsy values from array
const mixed = [0, 1, false, 2, "", 3, null, 4];
const cleaned = mixed.filter(Boolean);
console.log(cleaned)  // [1, 2, 3, 4]
```

---

### let, const, var Comparison
**File: `JavaScript_Basics/LetConst.js`**

```javascript
// var - function scoped (AVOID)
function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x);  // 10 (accessible outside block!)
}

// let - block scoped (PREFERRED)
function testLet() {
    if (true) {
        let y = 20;
    }
    console.log(y);  // ReferenceError: y is not defined
}

// const - block scoped, cannot reassign
const PI = 3.14159;
PI = 3.14;  // TypeError: Assignment to constant variable

// BUT: const object properties CAN be modified
const user = { name: "Abhishek" };
user.name = "Kumar";  // ✅ Allowed - modifying property
user = {};            // ❌ Error - reassigning const

// Redeclaration rules
var a = 1;
var a = 2;       // ✅ Allowed

let b = 1;
let b = 2;       // ❌ SyntaxError

const c = 1;
const c = 2;     // ❌ SyntaxError

// Temporal Dead Zone (TDZ)
console.log(x);  // ReferenceError - x in TDZ
let x = 10;
```

---

## 2. Loops & Conditionals

### if/else
**File: `Loops/ifElese.js`**

```javascript
let age = 25;

if (age <= 0) {
    console.log("Invalid age");
} else if (age <= 18) {
    console.log("Child");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}
```

---

### Switch Case
**File: `Loops/SwitchCase.js`**

```javascript
let day = "Mon";

switch (day) {
    case "Mon":
        console.log("Monday");
        break;
    case "Tue":
        console.log("Tuesday");
        break;
    case "Wed":
        console.log("Wednesday");
        break;
    case "Thu":
        console.log("Thursday");
        break;
    case "Fri":
        console.log("Friday");
        break;
    case "Sat":
        console.log("Saturday");
        break;
    case "Sun":
        console.log("Sunday");
        break;
    default:
        console.log("Unknown day");
}

// Note: Always use break to prevent fall-through
```

---

### Ternary Operator
**File: `Loops/TernaryOperator.js`**

```javascript
let age = 25;

// condition ? valueIfTrue : valueIfFalse
age >= 18 ? console.log("Adult") : console.log("Minor");

// Assign to variable
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"

// Nested ternary (not recommended - hard to read)
let category = age < 18 ? "Child" : age < 60 ? "Adult" : "Senior";
```

---

### for Loop
**File: `Loops/forloops.js`**

```javascript
// Iterate numbers
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// Iterate array
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

// Using array property
const arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
}
```

---

### for...of Loop
**File: `Loops/ForOfLoops.js`**

```javascript
const fruits = ["apple", "banana", "cherry"];

// Iterate VALUES (not indexes)
for (const fruit of fruits) {
    console.log(fruit);  // "apple", "banana", "cherry"
}

// Modifying array inside loop
const numbers = [1, 2, 3];
for (const num of numbers) {
    num = num * 2;  // Only modifies the variable, not array
}
console.log(numbers);  // [1, 2, 3] (unchanged)

// Get both index and value
for (const [index, value] of fruits.entries()) {
    console.log(`${index}: ${value}`);
}

// ❌ for...of does NOT work with objects
// Use for...in instead for objects
```

---

## 3. Array Methods

### Array Extraction Methods
**File: `ArrayInJS/ArrayExtractionMethods.js`**

```javascript
const arr = [10, 20, 30, 40, 50];

// length
console.log(arr.length);              // 5

// at() - access with negative index
console.log(arr.at(0));               // 10
console.log(arr.at(-1));              // 50 (last element)

// slice() - extract without mutating
console.log(arr.slice(1, 3));         // [20, 30]
console.log(arr.slice(2));            // [30, 40, 50]
console.log(arr.slice(-2));           // [40, 50]

// includes() - check if contains
console.log(arr.includes(30));        // true
console.log(arr.includes(100));       // false

// indexOf() - find first occurrence
console.log(arr.indexOf(30));         // 2

// lastIndexOf() - find last occurrence
console.log(arr.lastIndexOf(30));     // 2
```

---

### Array Addition Methods
**File: `ArrayInJS/ArraysAdditionMethods.js`**

```javascript
const arr = [20, 30];

// unshift() - add to START (mutates)
arr.unshift(10);
console.log(arr);  // [10, 20, 30]

// push() - add to END (mutates)
arr.push(40);
console.log(arr);  // [10, 20, 30, 40]

// reverse() - reverse array (mutates)
arr.reverse();
console.log(arr);  // [40, 30, 20, 10]

// Check if array
console.log(Array.isArray(arr));  // true
```

---

### Element Removal Methods
**File: `ArrayInJS/ElementRemovalMethods.js`**

```javascript
// pop() - remove from END
const arr1 = [1, 2, 3, 4];
arr1.pop();
console.log(arr1);  // [1, 2, 3]

// shift() - remove from START
const arr2 = [1, 2, 3, 4];
arr2.shift();
console.log(arr2);  // [2, 3, 4]

// splice(start, deleteCount, ...items)
const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2);  // Remove 2 elements starting at index 1
console.log(arr3);  // [1, 4, 5]

// splice with replacement
const arr4 = [1, 2, 3, 4, 5];
arr4.splice(1, 2, "a", "b", "c");
console.log(arr4);  // [1, "a", "b", "c", 4, 5]
```

---

### filter() Method
**File: `ArrayInJS/FilterDemo.js`**

```javascript
const numbers = [5, 12, 8, 23, 7, 34, 15];

// Filter numbers greater than 10
const filtered = numbers.filter(value => value > 10);
console.log(filtered);  // [12, 23, 34, 15]

// Filter by type
const mixed = [1, "two", 3, "four", 5];
const onlyNumbers = mixed.filter(x => typeof x === "number");
console.log(onlyNumbers);  // [1, 3, 5]

// Remove duplicates with filter
const arr = [1, 2, 2, 3, 3, 3];
const unique = arr.filter((val, idx, arr) => arr.indexOf(val) === idx);
console.log(unique);  // [1, 2, 3]
```

---

### forEach() Method
**File: `ArrayInJS/ForEach.js`**

```javascript
const arr = [1, 2, 3];

// Basic forEach
arr.forEach((value) => {
    console.log(value);  // 1, 2, 3
});

// Access index and entire array
arr.forEach((value, index, array) => {
    console.log(`${index}: ${value}`);
});

// forEach with transactions - modifying array
const transactions = [100, -50, 200, -75];
transactions.forEach((amount, index, arr) => {
    if (amount > 0) {
        arr[index] = { amount, type: "Credit" };
    } else {
        arr[index] = { amount, type: "Debit" };
    }
});
console.log(transactions);
// [
//   { amount: 100, type: "Credit" },
//   { amount: -50, type: "Debit" },
//   ...
// ]
```

---

### Practical forEach Example
**File: `ArrayInJS/ForEachExamples.js`**

```javascript
const transactions = [100, -50, 200, -75, 150, -25];

// Using forEach
const result1 = [];
transactions.forEach(amount => {
    if (amount > 0) {
        result1.push({ amount, type: "Credit" });
    } else {
        result1.push({ amount: Math.abs(amount), type: "Debit" });
    }
});
console.log(result1);

// Using for...of (alternative)
const result2 = [];
for (const amount of transactions) {
    if (amount > 0) {
        result2.push({ amount, type: "Credit" });
    } else {
        result2.push({ amount: Math.abs(amount), type: "Debit" });
    }
}
console.log(result2);
```

---

### map() Method
**File: `ArrayInJS/MapDemo.js`**

```javascript
// Transform each element
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// Map strings to objects
const names = ["Abhishek", "Kumar", "Singh"];
const nameObjects = names.map((name, index) => ({
    id: index + 1,
    name
}));
console.log(nameObjects);
// [
//   { id: 1, name: "Abhishek" },
//   { id: 2, name: "Kumar" },
//   { id: 3, name: "Singh" }
// ]

// Transaction mapping
const transactions = [100, -50, 200, -75];
const marked = transactions.map(amount => ({
    amount,
    type: amount > 0 ? "Credit" : "Debit"
}));
console.log(marked);
```

---

### find() and findIndex()
**File: `ArrayInJS/FindAndFindIndex.js`**

```javascript
const arr = [10, 20, 30, 40, 50];

// find() - returns FIRST element matching condition
const found = arr.find(x => x > 25);
console.log(found);  // 30

const notFound = arr.find(x => x > 100);
console.log(notFound);  // undefined

// findIndex() - returns INDEX of first match
const foundIndex = arr.findIndex(x => x > 25);
console.log(foundIndex);  // 2

const notFoundIndex = arr.findIndex(x => x > 100);
console.log(notFoundIndex);  // -1

// Find object in array
const users = [
    { id: 1, name: "Abhishek" },
    { id: 2, name: "Kumar" },
    { id: 3, name: "Singh" }
];
const user = users.find(u => u.name === "Kumar");
console.log(user);  // { id: 2, name: "Kumar" }
```

---

### reduce() Method
**File: `ArrayInJS/ReduceDemo.js`**

```javascript
// Sum array elements
const numbers = [10, 20, 30, 50, 78, 65];
const sum = numbers.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);  // initial value = 0
console.log(sum);  // 253

// Without initial value (uses first element as accumulator)
const sum2 = numbers.reduce((acc, val) => acc + val);
console.log(sum2);  // 253

// Find minimum value
const min = numbers.reduce((min, value) =>
    value < min ? value : min,
    numbers[0]
);
console.log(min);  // 10

// Find maximum value
const max = numbers.reduce((max, value) =>
    value > max ? value : max,
    numbers[0]
);
console.log(max);  // 78

// Count occurrences
const items = ["apple", "banana", "apple", "cherry", "apple"];
const count = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});
console.log(count);  // { apple: 3, banana: 1, cherry: 1 }
```

---

### sort() Method
**File: `ArrayInJS/Sort.js`**

```javascript
// String sort (alphabetical)
const names = ["Zoe", "Alice", "Bob"];
names.sort();
console.log(names);  // ["Alice", "Bob", "Zoe"]

// String sort descending
names.sort((a, b) => b.localeCompare(a));
console.log(names);  // ["Zoe", "Bob", "Alice"]

// Important: switch statement in comparator
const arr = [3, 1, 4, 1, 5, 9];
arr.sort((a, b) => {
    if (a < b) return -1;  // a comes first
    if (a > b) return 1;   // b comes first
    return 0;              // equal
});
console.log(arr);  // [1, 1, 3, 4, 5, 9]
```

---

### Sorting Numbers
**File: `ArrayInJS/SortingNumbers.js`**

```javascript
const numbers = [10, 5, 100, 2, 50];

// ❌ WRONG: Default alphabetical sort
numbers.sort();
console.log(numbers);  // [10, 100, 2, 5, 50] ❌ WRONG!

// ✅ CORRECT: Ascending numeric sort
numbers.sort((a, b) => a - b);
console.log(numbers);  // [2, 5, 10, 50, 100] ✅

// Descending numeric sort
numbers.sort((a, b) => b - a);
console.log(numbers);  // [100, 50, 10, 5, 2]

// The comparator returns:
// negative number if a < b
// positive number if a > b
// 0 if a === b
```

---

### Miscellaneous Array Methods
**File: `ArrayInJS/MiscArrayMethods.js`**

```javascript
// concat() - combine arrays (non-mutating)
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined);  // [1, 2, 3, 4]

// join() - convert array to string
const str = [1, 2, 3].join("-");
console.log(str);  // "1-2-3"

// split() - convert string to array
const arr = "apple,banana,cherry".split(",");
console.log(arr);  // ["apple", "banana", "cherry"]

// Combining multiple operations
const text = "apple, banana, cherry";
const cleaned = text
    .split(", ")
    .map(s => s.toUpperCase())
    .join(" | ");
console.log(cleaned);  // "APPLE | BANANA | CHERRY"
```

---

## 4. String Methods

### String Methods
**File: `StringInJS/StringMethods.js`**

```javascript
const str = "Hello World";

// Basic properties
console.log(str.length);           // 11

// Character access
console.log(str.charAt(0));        // "H"
console.log(str.at(0));            // "H"
console.log(str.at(-1));           // "d"
console.log(str.charCodeAt(0));    // 72

// Search methods
console.log(str.includes("World")); // true
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World")); // true
console.log(str.indexOf("o"));     // 4 (first)
console.log(str.lastIndexOf("o")); // 7 (last)

// Extract substring
console.log(str.slice(0, 5));      // "Hello"
console.log(str.substring(0, 5));  // "Hello"

// Case conversion
console.log(str.toUpperCase());    // "HELLO WORLD"
console.log(str.toLowerCase());    // "hello world"

// Whitespace
console.log("  hello  ".trim());   // "hello"

// Repeat
console.log("ab".repeat(3));       // "ababab"

// Replace
console.log(str.replace("World", "JavaScript")); // "Hello JavaScript"
console.log("hello hello".replaceAll("hello", "hi")); // "hi hi"

// Split
console.log(str.split(" "));       // ["Hello", "World"]
```

---

### Template Strings
**File: `StringInJS/TemplateString.js`**

```javascript
const name = "Abhishek";
const age = 35;

// Template literals with ${} interpolation
const message = `My name is ${name} and I am ${age}`;
console.log(message);

// Multi-line strings
const multiline = `
    This is line 1
    This is line 2
    This is line 3
`;
console.log(multiline);

// Expressions in template literals
const result = `${age > 30 ? "Over 30" : "Under 30"}`;
console.log(result);

// Function calls in template literals
console.log(`${name.toUpperCase()} is ${age + 5} years old next year`);
```

---

## 5. Functions & Callbacks

### Basic Functions
**File: `Functions/BasicFunctionsDemo.js`**

```javascript
// Function with return
function add(a, b) {
    return a + b;
}
const sum = add(5, 3);
console.log(sum);  // 8

// Function without return
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Abhishek");  // "Hello, Abhishek!"
```

---

### Function Expression
**File: `Functions/FunctionExpression.js`**

```javascript
// Anonymous function assigned to variable
const farewell = function(name) {
    return `Goodbye, ${name}!`;
};

console.log(farewell("Abhishek"));  // "Goodbye, Abhishek!"
console.log(typeof farewell);       // "function"

// Function reassignment
let myFunc = function() { return 1; };
myFunc = function() { return 2; };
console.log(myFunc());  // 2
```

---

### Arrow Functions
**File: `Functions/ArrowFunction.js`**

```javascript
// Single line implicit return
const square = x => x * x;
console.log(square(5));  // 25

// Multiple lines with explicit return
const add = (a, b) => {
    return a + b;
};
console.log(add(3, 4));  // 7

// Parentheses optional for single parameter
const greet = name => `Hello, ${name}`;
console.log(greet("Abhishek"));  // "Hello, Abhishek"

// No parameters
const getRandom = () => Math.random();
console.log(getRandom());
```

---

### First-Class Functions
**File: `Functions/FirstClassFunction.js`**

```javascript
// 1. Store in variable
const myFunc = function() { return 42; };
console.log(myFunc());  // 42

// 2. Pass as argument
function execute(fn) {
    return fn();
}
console.log(execute(myFunc));  // 42

// 3. Return from function
function createFunc() {
    return function() { return "created"; };
}
const newFunc = createFunc();
console.log(newFunc());  // "created"

// 4. Store in object
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b
};
console.log(operations.add(10, 5));  // 15

// 5. Store in array
const funcs = [
    () => "first",
    () => "second",
    () => "third"
];
console.log(funcs[1]());  // "second"
```

---

### Callbacks
**File: `Functions/CallBackBasics.js`**

```javascript
// Simple callback
function finishHomework(callback) {
    console.log("Doing homework...");
    callback("Homework completed!");
}

finishHomework((message) => {
    console.log(message);
});
// Output: Doing homework... 
//         Homework completed!
```

---

### Async Callback with setTimeout
**File: `Functions/Callback_2.js`**

```javascript
// Simulate fetching user from database
function fetchUser(userId, callback) {
    console.log(`Fetching user ${userId}...`);
    setTimeout(() => {
        const user = { id: userId, name: "Abhishek" };
        callback(user);  // Execute callback after delay
    }, 2000);
}

console.log("Start");
fetchUser(1, (user) => {
    console.log("User:", user);
});
console.log("End");

// Output:
// Start
// Fetching user 1...
// End
// (2 seconds later)
// User: { id: 1, name: "Abhishek" }
```

---

### Callback with Metaphor
**File: `Functions/CallBack3.js`**

```javascript
// Coffee shop metaphor - callback pattern
function orderCoffee(callback) {
    console.log("You: I want a coffee!");
    
    setTimeout(() => {
        console.log("Barista: Your coffee is ready!");
        callback("Coffee delivered");
    }, 3000);
}

console.log("Waiting...");
orderCoffee((result) => {
    console.log("You: Thanks! " + result);
});
console.log("You can do other things while waiting");

// Code doesn't wait for callback - non-blocking!
// This demonstrates async programming with callbacks
```

---

### Higher-Order Function - Takes Function
**File: `Functions/HOFDemo_1.js`**

```javascript
// HOF that takes a function as parameter
function calculate(a, b, operation) {
    return operation(a, b);
}

// Different operations
const result1 = calculate(10, 5, (x, y) => x + y);
console.log(result1);  // 15

const result2 = calculate(10, 5, (x, y) => x - y);
console.log(result2);  // 5

const result3 = calculate(10, 5, (x, y) => x * y);
console.log(result3);  // 50

const result4 = calculate(10, 5, (x, y) => x / y);
console.log(result4);  // 2
```

---

### Higher-Order Function - Returns Function
**File: `Functions/HOFDemo_2.js`**

```javascript
// HOF that returns a customized function
function createGreeter(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

const sayHello = createGreeter("Hello");
const sayWelcome = createGreeter("Welcome");

sayHello("Abhishek");    // "Hello, Abhishek!"
sayWelcome("Abhishek");  // "Welcome, Abhishek!"

// Closure: returned function remembers 'greeting'

// Function factory - create discount functions
function createDiscount(discountPercent) {
    return function(price) {
        return price - (price * discountPercent / 100);
    };
}

const tenPercentOff = createDiscount(10);
const twentyPercentOff = createDiscount(20);

console.log(tenPercentOff(100));    // 90
console.log(twentyPercentOff(100)); // 80
```

---

## 6. Practice Programs

### Check Middle Names
**File: `JSPracticePrograms/CheckMiddleNames.js`**

```javascript
// Count customers with middle names
const customers = [
    { firstName: "Abhishek", middleName: "Kumar", lastName: "Singh" },
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", middleName: "Marie", lastName: "Smith" },
    { firstName: "Robert", lastName: "Johnson" },
    { firstName: "Lisa", middleName: "Anne", lastName: "Williams" }
];

// Solution: map() -> extract middle names -> filter out undefined
const withMiddleNames = customers
    .map(customer => customer.middleName)
    .filter(name => name !== undefined)
    .length;

console.log(withMiddleNames);  // 3

// Alternative: using filter() first
const count = customers
    .filter(c => c.middleName !== undefined)
    .length;

console.log(count);  // 3
```

---

### Extract Initials
**File: `JSPracticePrograms/FilterProg.js`**

```javascript
// Extract first letter of each name
const names = ['Abhishek', 'Kumar', 'Singh'];

// Solution: map() to get first letter, join() to combine
const initials = names.map(name => name[0]).join("");
console.log(initials);  // "AKS"

// Alternative with shorter syntax
const initials2 = names.map(n => n[0]).join("");
console.log(initials2);  // "AKS"

// Another approach
const initials3 = names.map(n => n.charAt(0)).join("");
console.log(initials3);  // "AKS"
```

---

### Reverse a Number
**File: `JSPracticePrograms/ReverseNumber.js`**

```javascript
// Reverse integer 12345 to 54321
let number = 12345;
let reversed = 0;

while (number > 0) {
    // Get last digit
    let digit = number % 10;
    // Add to reversed (shift left and add)
    reversed = reversed * 10 + digit;
    // Remove last digit from number
    number = Math.floor(number / 10);
}

console.log(reversed);  // 54321

// Step-by-step:
// number=12345, reversed=0  ->  digit=5, reversed=5, number=1234
// number=1234,  reversed=5  ->  digit=4, reversed=54, number=123
// number=123,   reversed=54 ->  digit=3, reversed=543, number=12
// number=12,    reversed=543 -> digit=2, reversed=5432, number=1
// number=1,     reversed=5432 -> digit=1, reversed=54321, number=0
```

---

### Sum Array Using Reduce
**File: `JSPracticePrograms/SumOfArrayUsingReduce.js`**

```javascript
// Sum array using reduce with initial value
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, value) => {
    console.log(`accumulator: ${accumulator}, value: ${value}`);
    return accumulator + value;
}, 0);  // Initial value = 0

console.log("Total:", sum);  // 15

// Output:
// accumulator: 0, value: 1
// accumulator: 1, value: 2
// accumulator: 3, value: 3
// accumulator: 6, value: 4
// accumulator: 10, value: 5
// Total: 15

// Without initial value
const sum2 = numbers.reduce((acc, val) => {
    return acc + val;
    // First iteration uses first array element as accumulator
});
console.log(sum2);  // 15
```

---

## Summary

This document contains **all 38 JavaScript programs** from your workspace organized by topic with complete code snippets. Use this alongside the main revision notes for comprehensive study.

**Study Tips:**
1. ✅ Read code snippets carefully
2. ✅ Type them out (don't just copy-paste)
3. ✅ Run them in browser console or Node.js
4. ✅ Modify and experiment with values
5. ✅ Try to predict output before running

**Happy Learning! 🚀**
