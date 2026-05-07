# 🚀 JavaScript Comprehensive Revision Notes

**Created for:** Quick reference and exam preparation  
**Coverage:** Variables, Data Types, Control Flow, Arrays, Strings, Functions, and Advanced Concepts

---

## 📋 Table of Contents
1. [JavaScript Basics](#1-javascript-basics)
2. [Loops & Conditionals](#2-loops--conditionals)
3. [Arrays & Array Methods](#3-arrays--array-methods)
4. [Strings & String Methods](#4-strings--string-methods)
5. [Functions & Advanced Concepts](#5-functions--advanced-concepts)
6. [Practice Problems](#6-practice-problems)
7. [Quick Reference](#7-quick-reference)

---

## 1. JavaScript Basics

### 1.1 Primitive Data Types

JavaScript has 7 primitive data types that cannot be changed once created:

```javascript
// String
let name = "Abhishek Singh";
console.log(typeof name); // "string"

// Number (int or float)
let age = 35;
let price = 99.99;
console.log(typeof age); // "number"

// Boolean
let isMarried = true;
console.log(typeof isMarried); // "boolean"

// Undefined - variable declared but not assigned
let lastname;
console.log(lastname); // undefined
console.log(typeof lastname); // "undefined"

// Null - represents intentional absence of value
let webdriver = null;
console.log(typeof webdriver); // "object" (bug in JS!)

// BigInt - for very large integers
let bigNumber = 123456789012345678901234567890n;

// Symbol - unique identifiers
let sym = Symbol("description");
```

**Key Points:**
- `undefined` = declared but not assigned
- `null` = intentional empty value
- `typeof` operator checks data type
- `null` returns "object" (known JS quirk)

---

### 1.2 Type Conversion

#### **Explicit Type Conversion**

```javascript
// String Conversion
String(123);           // "123"
String(true);          // "true"
String(null);          // "null"
String(undefined);     // "undefined"

// Number Conversion
Number("42");          // 42
Number("99.99");       // 99.99
Number(true);          // 1
Number(false);         // 0
Number(null);          // 0
Number(undefined);     // NaN

// Boolean Conversion
Boolean(1);            // true
Boolean(0);            // false
Boolean("text");       // true
Boolean("");           // false
Boolean(null);         // false
```

#### **Type Coercion (Implicit Conversion)**

```javascript
// String Coercion (+ operator)
console.log("5" + 2);      // "52" (concatenation)
console.log("5" + 2 + 1);  // "521"
console.log(2 + 1 + "5");  // "35" (math first, then concat)

// Numeric Coercion (-, *, /, %)
console.log("10" - 2);     // 8
console.log("10" * 2);     // 20
console.log("10" / 2);     // 5

// Boolean Coercion in conditionals
if ("text") { }            // true - non-empty string is truthy
if (1) { }                 // true - non-zero number is truthy
```

---

### 1.3 Equality Operations

```javascript
// Loose Equality (==) - COERCES types before comparison
console.log(5 == "5");      // true (converts "5" to 5)
console.log(0 == false);    // true (false converts to 0)
console.log(null == undefined); // true (special case)

// Strict Equality (===) - NO coercion, must match exactly
console.log(5 === "5");     // false
console.log(0 === false);   // false
console.log(null === undefined); // false

// ✅ BEST PRACTICE: Always use === for safer comparisons
```

**Falsy vs Truthy:**
```javascript
// 8 Falsy Values:
false, 0, -0, 0n (BigInt zero), "" (empty string), null, undefined, NaN

// Everything else is Truthy
1, "text", [], {}, true, etc.

// Use filter(Boolean) to remove falsy values
const arr = [0, 1, false, 2, "", 3, null, 4];
arr.filter(Boolean); // [1, 2, 3, 4]
```

---

### 1.4 Variable Declaration: let, const, var

| Feature | var | let | const |
|---------|-----|-----|-------|
| **Scope** | Function | Block | Block |
| **Redeclaration** | ✅ | ❌ | ❌ |
| **Reassignment** | ✅ | ✅ | ❌ |
| **Hoisting** | Hoisted (undefined) | Hoisted (TDZ) | Hoisted (TDZ) |
| **Use** | Avoid | Modern default | When immutable |

```javascript
// var - function scoped (outdated)
function example() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 (accessible outside block!)
}

// let - block scoped (preferred for variables)
function example2() {
    if (true) {
        let y = 20;
    }
    console.log(y); // ReferenceError: y is not defined
}

// const - block scoped, cannot reassign
const PI = 3.14159;
PI = 3.14; // TypeError: Assignment to constant variable

// BUT: const object properties CAN be modified
const user = { name: "Abhishek" };
user.name = "Kumar"; // ✅ Allowed - modifying property
user = {}; // ❌ Error - reassigning const variable
```

**Temporal Dead Zone (TDZ):**
```javascript
console.log(x); // ReferenceError - x exists but not initialized (TDZ)
let x = 10;
```

---

## 2. Loops & Conditionals

### 2.1 Conditional Statements

#### **if/else if/else**
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

#### **switch/case**
```javascript
let day = "Mon";
switch (day) {
    case "Mon":
        console.log("Monday");
        break;
    case "Tue":
        console.log("Tuesday");
        break;
    default:
        console.log("Unknown day");
}
// Always use break to prevent fall-through!
```

#### **Ternary Operator**
```javascript
// condition ? valueIfTrue : valueIfFalse
age >= 18 ? console.log("Adult") : console.log("Minor");

// Assign to variable
let status = age >= 18 ? "Adult" : "Minor";
```

---

### 2.2 Loops

#### **for Loop**
```javascript
// Traditional for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// Iterate array with index
const arr = ["A", "B", "C"];
for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}
```

#### **for...of Loop**
```javascript
// Iterate array VALUES (not indexes)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit); // "apple", "banana", "cherry"
}

// ❌ for...of does NOT work with objects
// Use for...in instead

// Access index with entries()
for (const [index, value] of fruits.entries()) {
    console.log(index, value);
}
```

#### **forEach Loop**
```javascript
// forEach with callback
const numbers = [1, 2, 3];
numbers.forEach((value, index, arr) => {
    console.log(value, index); // value, index, entire array available
});

// Modifying original array
numbers.forEach((_, i) => {
    numbers[i] = numbers[i] * 2;
});
console.log(numbers); // [2, 4, 6]
```

#### **while/do...while**
```javascript
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// Reverse a number using while
let num = 12345, reversed = 0;
while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
}
console.log(reversed); // 54321
```

---

## 3. Arrays & Array Methods

### 3.1 Array Basics

```javascript
// Creating arrays
const arr = [10, 20, 30];
const emptyArr = [];
const mixedArr = [1, "text", true, null, {}];

// Array length
console.log(arr.length); // 3

// Accessing elements
console.log(arr[0]); // 10
console.log(arr.at(-1)); // 30 (negative index from end)
```

---

### 3.2 Array Extraction Methods

```javascript
const arr = [10, 20, 30, 40, 50];

// slice() - returns new array without mutating original
arr.slice(1, 3);        // [20, 30] (from index 1 to 3, excluding 3)
arr.slice(2);           // [30, 40, 50] (from index 2 to end)
arr.slice(-2);          // [40, 50] (last 2 elements)

// includes() - check if element exists
arr.includes(30);       // true
arr.includes(100);      // false

// indexOf() / lastIndexOf() - find element index
arr.indexOf(30);        // 2
arr.lastIndexOf(30);    // 2 (useful if element appears multiple times)

// find() / findIndex() - find element by condition
arr.find(x => x > 25);  // 30 (first element matching condition)
arr.findIndex(x => x > 25); // 2 (index of first match)
```

---

### 3.3 Array Addition Methods

```javascript
// unshift() - add to START (mutates original)
const arr = [20, 30];
arr.unshift(10);        // returns new length: 3
console.log(arr);       // [10, 20, 30]

// push() - add to END (mutates original)
arr.push(40);           // returns new length: 4
console.log(arr);       // [10, 20, 30, 40]

// concat() - combine arrays (does NOT mutate)
const newArr = arr.concat([50, 60]);
console.log(newArr);    // [10, 20, 30, 40, 50, 60]
console.log(arr);       // [10, 20, 30, 40] (unchanged)
```

---

### 3.4 Array Removal Methods

```javascript
// pop() - remove from END (mutates original)
const arr = [10, 20, 30];
arr.pop();              // returns 30
console.log(arr);       // [10, 20]

// shift() - remove from START (mutates original)
arr.shift();            // returns 10
console.log(arr);       // [20]

// splice(start, deleteCount, ...items) - remove/add/replace (mutates original)
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 2);      // removes 2 elements starting at index 1
console.log(arr2);      // [1, 4, 5]

// splice with replacement
const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2, "a", "b", "c"); // replace 2 elements with 3 elements
console.log(arr3);      // [1, "a", "b", "c", 4, 5]
```

---

### 3.5 Array Transformation Methods

#### **map() - Transform each element**
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8]

// Real-world example: add transaction type
const transactions = [10, -5, 20, -8];
const marked = transactions.map(amount => ({
    amount,
    type: amount > 0 ? "Credit" : "Debit"
}));
// [
//   { amount: 10, type: "Credit" },
//   { amount: -5, type: "Debit" },
//   ...
// ]
```

#### **filter() - Keep elements matching condition**
```javascript
const numbers = [5, 12, 8, 23, 7];
const large = numbers.filter(x => x > 10);
console.log(large); // [12, 23]

// Remove falsy values
const arr = [0, 1, false, 2, "", 3, null];
const cleaned = arr.filter(Boolean); // [1, 2, 3]
```

#### **reduce() - Accumulate to single value**
```javascript
const numbers = [10, 20, 30, 50, 78, 65];

// Sum all values
const sum = numbers.reduce((accumulator, value) => {
    return accumulator + value;
}, 0); // initial value = 0
console.log(sum); // 253

// Find minimum value
const min = numbers.reduce((min, value) =>
    value < min ? value : min,
    numbers[0]
);
console.log(min); // 10

// Count by category
const transactions = [10, -5, 20, -8, 15];
const summary = transactions.reduce((acc, amount) => {
    if (amount > 0) acc.income += amount;
    else acc.expense += Math.abs(amount);
    return acc;
}, { income: 0, expense: 0 });
// { income: 45, expense: 13 }
```

#### **forEach() - Loop through elements**
```javascript
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// 0: apple
// 1: banana
// 2: cherry

// forEach returns undefined (cannot break early)
// for...of allows break, so use for early exit
```

---

### 3.6 Array Sorting

#### **sort() - Default alphabetical sort**
```javascript
const names = ["Zoe", "Alice", "Bob"];
names.sort();
console.log(names); // ["Alice", "Bob", "Zoe"]

// ❌ PROBLEM: Numbers sort as strings!
const numbers = [10, 5, 100, 2];
numbers.sort(); // [10, 100, 2, 5] ❌ WRONG!
```

#### **sort() with Custom Comparator**
```javascript
const numbers = [10, 5, 100, 2];

// Ascending: a - b
numbers.sort((a, b) => a - b);
console.log(numbers); // [2, 5, 10, 100] ✅

// Descending: b - a
numbers.sort((a, b) => b - a);
console.log(numbers); // [100, 10, 5, 2] ✅

// String descending
const names = ["Zoe", "Alice", "Bob"];
names.sort((a, b) => b.localeCompare(a)); // ["Zoe", "Bob", "Alice"]
```

#### **reverse() - Reverse array order**
```javascript
const arr = [1, 2, 3, 4];
arr.reverse(); // mutates original
console.log(arr); // [4, 3, 2, 1]

// Without mutation:
const reversed = [...arr].reverse(); // [4, 3, 2, 1]
```

---

### 3.7 Array Combination Methods

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

// concat() - combine arrays (non-mutating)
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]

// join() - convert array to string
const str = [1, 2, 3].join("-");
console.log(str); // "1-2-3"

// split() - convert string to array
const arr = "apple,banana,cherry".split(",");
console.log(arr); // ["apple", "banana", "cherry"]
```

---

## 4. Strings & String Methods

### 4.1 String Creation & Properties

```javascript
const str = "Hello World";

// length
console.log(str.length); // 11

// Accessing characters
console.log(str[0]);           // "H"
console.log(str.charAt(0));    // "H"
console.log(str.at(-1));       // "d" (last character)
console.log(str.charCodeAt(0)); // 72 (ASCII code)
```

---

### 4.2 String Search Methods

```javascript
const str = "Hello World";

// includes() - check if substring exists
str.includes("World"); // true
str.includes("world"); // false (case-sensitive)

// startsWith() / endsWith()
str.startsWith("Hello"); // true
str.endsWith("World");   // true

// indexOf() / lastIndexOf() - find position
str.indexOf("o");       // 4 (first occurrence)
str.lastIndexOf("o");   // 7 (last occurrence)
str.indexOf("xyz");     // -1 (not found)
```

---

### 4.3 String Extraction Methods

```javascript
const str = "Hello World";

// slice(start, end) - extracts substring
str.slice(0, 5);        // "Hello"
str.slice(6);           // "World" (to end)
str.slice(-5);          // "World" (last 5 chars)
str.slice(-5, -1);      // "Worl"

// substring(start, end) - similar but no negative indexes
str.substring(0, 5);    // "Hello"
str.substring(-5);      // "Hello World" (treats -5 as 0)

// ✅ Prefer slice() over substring()
```

---

### 4.4 String Modification Methods

```javascript
const str = "hello world";

// toUpperCase() / toLowerCase()
str.toUpperCase();      // "HELLO WORLD"
str.toLowerCase();      // "hello world"

// trim() - remove whitespace
"  hello  ".trim();     // "hello"
"  hello  ".trimStart(); // "hello  "
"  hello  ".trimEnd();   // "  hello"

// repeat() - repeat string
"abc".repeat(3);        // "abcabcabc"

// replace() - replace first match
"hello hello".replace("hello", "hi"); // "hi hello"

// replaceAll() - replace all matches
"hello hello".replaceAll("hello", "hi"); // "hi hi"

// split() - convert to array
"a,b,c".split(",");     // ["a", "b", "c"]
```

---

### 4.5 String Concatenation & Template Literals

```javascript
const name = "Abhishek";
const age = 35;

// Traditional concatenation
const msg1 = "My name is " + name + " and I am " + age;

// Template Literals (backticks) - preferred
const msg2 = `My name is ${name} and I am ${age}`;

// Multi-line strings
const multiline = `
    Line 1
    Line 2
    Line 3
`;

// Expressions in template literals
const msg3 = `I am ${age > 30 ? "over 30" : "under 30"}`;
```

---

## 5. Functions & Advanced Concepts

### 5.1 Function Declaration & Expression

```javascript
// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Abhishek")); // "Hello, Abhishek!"

// Function Expression
const farewell = function(name) {
    return `Goodbye, ${name}!`;
};
console.log(farewell("Abhishek")); // "Goodbye, Abhishek!"

// Arrow Function (ES6)
const welcome = (name) => `Welcome, ${name}!`;
console.log(welcome("Abhishek")); // "Welcome, Abhishek!"

// Arrow Function with single parameter (parentheses optional)
const square = x => x * x;

// Arrow Function with implicit return (no braces)
const add = (a, b) => a + b;

// Arrow Function with block body (needs explicit return)
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
```

---

### 5.2 First-Class Functions

In JavaScript, functions are "first-class citizens":

```javascript
// 1. Assign to variable
const myFunc = function() { return 42; };

// 2. Pass as argument
function execute(fn) {
    return fn();
}
execute(myFunc); // 42

// 3. Return from function
function createFunc() {
    return function() { return "created"; };
}
const newFunc = createFunc();
newFunc(); // "created"

// 4. Store in objects/arrays
const funcArray = [
    () => "first",
    () => "second",
    () => "third"
];
funcArray[0](); // "first"
```

---

### 5.3 Callbacks

A callback is a function passed to another function, executed later:

```javascript
// Simple callback
function handleCompletion(callback) {
    console.log("Work completed!");
    callback("Success");
}

handleCompletion((result) => {
    console.log(`Result: ${result}`);
});

// Asynchronous callback with setTimeout
function fetchUser(userId, callback) {
    console.log(`Fetching user ${userId}...`);
    setTimeout(() => {
        const user = { id: userId, name: "Abhishek" };
        callback(user); // Callback fires after delay
    }, 2000);
}

fetchUser(1, (user) => {
    console.log("User data:", user);
    // Code does NOT wait for setTimeout - non-blocking!
});
console.log("Code continues...");

// Output:
// Fetching user 1...
// Code continues...
// (2 seconds later)
// User data: { id: 1, name: "Abhishek" }
```

**Callback Hell (Callback Pyramid of Doom):**
```javascript
// ❌ Multiple nested callbacks
fetchUser(1, (user1) => {
    fetchPosts(user1.id, (posts1) => {
        fetchComments(posts1[0].id, (comments) => {
            console.log(comments);
            // Deeply nested - hard to read!
        });
    });
});

// ✅ Solution: Use Promises or async/await (beyond revision scope)
```

---

### 5.4 Higher-Order Functions (HOF)

A HOF is a function that takes another function as parameter or returns a function:

#### **HOF that Takes a Function**
```javascript
// Generic calculator
function calculate(a, b, operation) {
    return operation(a, b);
}

// Different operations
calculate(10, 5, (a, b) => a + b); // 15
calculate(10, 5, (a, b) => a - b); // 5
calculate(10, 5, (a, b) => a * b); // 50

// Real-world: array methods are HOF!
[1, 2, 3].map(x => x * 2); // map() takes callback function
```

#### **HOF that Returns a Function (Function Factory)**
```javascript
// createGreeter - returns customized function
function createGreeter(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

const sayHello = createGreeter("Hello");
const sayWelcome = createGreeter("Welcome");

sayHello("Abhishek");   // "Hello, Abhishek!"
sayWelcome("Abhishek"); // "Welcome, Abhishek!"

// createDiscount - returns pricing function with closure
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

### 5.5 Closures

A closure is when a function remembers variables from its outer scope even after that scope ends:

```javascript
function makeCounter() {
    let count = 0; // Outer scope variable
    
    return function() {
        count++; // Inner function "remembers" count
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Each counter has its own closure
const counter2 = makeCounter();
console.log(counter2()); // 1 (separate closure)

// Real-world: Private variables
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable
    
    return {
        deposit: (amount) => balance += amount,
        withdraw: (amount) => balance -= amount,
        getBalance: () => balance
    };
}

const account = createBankAccount(1000);
account.deposit(500); // balance = 1500
account.withdraw(200); // balance = 1300
console.log(account.getBalance()); // 1300
// account.balance is NOT accessible directly!
```

---

## 6. Practice Problems

### Problem 1: Sum Array Using Reduce
```javascript
const numbers = [1, 2, 3, 4, 5];

// Solution
const sum = numbers.reduce((acc, value) => acc + value, 0);
console.log(sum); // 15

// Alternative: without initial value
const sum2 = numbers.reduce((acc, value) => acc + value);
console.log(sum2); // 15
```

### Problem 2: Extract First Letters
```javascript
const names = ['Abhishek', 'Kumar', 'Singh'];

// Solution: map() to get first letter, join() to combine
const initials = names.map(name => name[0]).join("");
console.log(initials); // "AKS"
```

### Problem 3: Count Customers with Middle Names
```javascript
const customers = [
    { firstName: "Abhishek", middleName: "Kumar", lastName: "Singh" },
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", middleName: "Marie", lastName: "Smith" }
];

// Solution: filter() for 3-part names, map() to extract, filter out undefined
const withMiddleNames = customers
    .map(c => c.middleName)
    .filter(name => name !== undefined)
    .length;

console.log(withMiddleNames); // 2
```

### Problem 4: Reverse a Number
```javascript
const num = 12345;

// Solution: while loop with modulo
let reversed = 0;
let temp = num;
while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
}
console.log(reversed); // 54321
```

### Problem 5: Filter and Transform Transactions
```javascript
const transactions = [
    { id: 1, amount: 100 },
    { id: 2, amount: -50 },
    { id: 3, amount: 200 },
    { id: 4, amount: -30 }
];

// Get only debits (negative) with increased amount
const debits = transactions
    .filter(t => t.amount < 0)
    .map(t => ({ ...t, amount: Math.abs(t.amount) }));

console.log(debits);
// [
//   { id: 2, amount: 50 },
//   { id: 4, amount: 30 }
// ]
```

---

## 7. Quick Reference

### Array Methods Quick Reference

| Method | Mutates? | Returns | Use Case |
|--------|----------|---------|----------|
| `push()` | ✅ Yes | New length | Add to end |
| `pop()` | ✅ Yes | Removed element | Remove from end |
| `shift()` | ✅ Yes | Removed element | Remove from start |
| `unshift()` | ✅ Yes | New length | Add to start |
| `splice()` | ✅ Yes | Removed elements | Add/remove/replace |
| `slice()` | ❌ No | New array | Extract portion |
| `concat()` | ❌ No | New array | Combine arrays |
| `map()` | ❌ No | New array | Transform elements |
| `filter()` | ❌ No | New array | Keep matching elements |
| `reduce()` | ❌ No | Single value | Accumulate to value |
| `forEach()` | ❌ No | undefined | Loop through elements |
| `find()` | ❌ No | First match or undefined | Find first element |
| `findIndex()` | ❌ No | Index or -1 | Find index |
| `includes()` | ❌ No | Boolean | Check if exists |
| `indexOf()` | ❌ No | Index or -1 | Find index |
| `sort()` | ✅ Yes | Sorted array | Sort elements |
| `reverse()` | ✅ Yes | Reversed array | Reverse order |
| `join()` | ❌ No | String | Convert to string |

---

### String Methods Quick Reference

| Method | Mutates? | Use Case |
|--------|----------|----------|
| `length` | - | Get string length |
| `charAt(i)` | No | Get character at index |
| `at(i)` | No | Get character (supports negative) |
| `charCodeAt(i)` | No | Get ASCII code |
| `includes(str)` | No | Check if contains |
| `indexOf(str)` | No | Find first position |
| `slice(start, end)` | No | Extract substring |
| `substring(start, end)` | No | Extract substring (no negatives) |
| `toUpperCase()` | No | Convert to uppercase |
| `toLowerCase()` | No | Convert to lowercase |
| `trim()` | No | Remove whitespace |
| `split(sep)` | No | Convert to array |
| `replace(old, new)` | No | Replace first match |
| `replaceAll(old, new)` | No | Replace all matches |
| `repeat(n)` | No | Repeat string |
| `startsWith(str)` | No | Check if starts with |
| `endsWith(str)` | No | Check if ends with |

---

### Comparison: Mutating vs Non-Mutating

```javascript
// MUTATING (changes original)
const arr = [1, 2, 3];
arr.push(4);        // [1, 2, 3, 4]
arr.pop();          // [1, 2, 3]
arr.reverse();      // [3, 2, 1]
arr.sort();         // [1, 2, 3]
arr.splice(1, 1);   // [1, 3]

// NON-MUTATING (returns new, original unchanged)
const arr = [1, 2, 3];
arr.slice();        // [1, 2, 3]
arr.map(x => x * 2); // [2, 4, 6]
arr.filter(x => x > 1); // [2, 3]
arr.concat([4, 5]); // [1, 2, 3, 4, 5]
arr.join("-");      // "1-2-3"
```

---

## 8. Key Takeaways for Exams

✅ **Do's:**
- Use `===` instead of `==`
- Use `const` by default, `let` when reassignment needed
- Use `map()`, `filter()`, `reduce()` for array operations
- Use template literals for string interpolation
- Use arrow functions for conciseness
- Understand mutating vs non-mutating methods
- Practice destructuring and spread operator (advanced)

❌ **Don'ts:**
- Don't forget `break` in switch statements
- Don't mix up `slice()` and `splice()`
- Don't use `==` for comparisons
- Don't assume `sort()` works correctly for numbers
- Don't forget `filter()` doesn't mutate original
- Don't nest callbacks too deeply (use Promises)

---

## 9. Important JavaScript Quirks & Gotchas

```javascript
// 1. typeof null returns "object" ❌ BUG
typeof null; // "object" (should be "null")

// 2. Array is object
typeof []; // "object"
Array.isArray([]) // true (correct way to check)

// 3. NaN is number (confusing!)
typeof NaN; // "number"
NaN === NaN; // false (NaN is not equal to itself!)
Number.isNaN(NaN); // true (correct way to check)

// 4. Empty array is truthy
Boolean([]); // true
Boolean([].length === 0); // false

// 5. Comparison quirks
0 == false; // true (coercion)
0 === false; // false (strict)

// 6. String numbers
"10" - 5; // 5 (numeric coercion)
"10" + 5; // "105" (string concatenation)
```

---

**Happy Revising! 🎯**  
*Use this document for quick lookups during exam preparation.*
