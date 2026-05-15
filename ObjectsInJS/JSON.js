//JSON stands for JavaScript Object Notation, a lightweight data interchange format.
// JSON (JavaScript Object Notation)
// JSON is:

// A string, not an object

// Used for APIs, config files, storage

// Cannot contain functions

// Cannot contain undefined

// Cannot contain comments

// Keys must be double‑quoted strings

// Values must be simple data only

// JavaScript does not allow standalone JSON

// Wrap it inside a variable to make it valid JS

//You CANNOT add or remove properties from JSON.Because JSON is just a string, not a live data structure like java script object


const jsonData = `
{
  "name": "Abhishek",
  "age": 36,
  "Title":null
}
`;
console.log(typeof jsonData)
console.log(jsonData)