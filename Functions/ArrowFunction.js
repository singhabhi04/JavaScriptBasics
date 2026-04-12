//An arrow function is a shorter, cleaner, modern way to write a function in JavaScript,
//  introduced in ES6.

//Normal Function
function add(a, b) {
    return a + b;
}
//Arrow Function

const sumOfTwoNumb = (a, b) => a + b;

// ✔ No function keyword
// ✔ No parentheses if only one parameter
// ✔ No {} or return for one‑line expressions

function greet(name) {
  return "Hello " + name;
}

//corresponding Arrow Function
 const greet = name=>"Hello" + name;


