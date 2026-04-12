// What “First‑Class Citizen” Means in JavaScript
// A value is first‑class if it can do all of these:
// Stored in a variable
// Passed as an argument to a function
// Returned from a function
// Stored in data structures (arrays, objects)
// Assigned as object properties
// Created at runtime
// JavaScript functions can do ALL of these →
// Therefore, functions are first‑class citizens.
//JavaScript treats functions as values — just like numbers, strings, objects.
//First‑class function → You can store a function in a variable

const add = (a, b) => a + b;
//This is just a normal function stored in a variable.

//2. Pass a function as an argument

function execute(fn) {
    fn();
}

execute(() => console.log("Running..."));
//3. Return a function from another function

function outer() {
    return function inner() {
        console.log("I am inner");
    };
}

const fn = outer();
fn();
//4. Store functions inside objects
const obj = {
    sayHi: () => console.log("Hi!")
};

obj.sayHi();
//5. Store functions inside arrays
const arr = [
    () => console.log("First"),
    () => console.log("Second")
];

arr[0]();
arr[1]();
