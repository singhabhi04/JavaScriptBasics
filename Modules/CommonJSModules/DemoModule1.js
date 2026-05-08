//A Module in JavaScript is simply a separate file that exports something (functions, variables, classes) so other files can import and use it.  
//⭐ What Is a Module in JavaScript?
// A module is just a JS file with its own scope.
// Anything you want to share must be exported, and anything you want to use must be imported.

// Modules solve real problems:

// Avoid huge files

// Avoid naming conflicts

// Reuse code across files

// Maintain clean folder structure

// Enable scalable automation frameworks (Playwright, Selenium, Node apps)

// ⭐ Types of Modules in JavaScript
// There are two major module systems you must know:

// ES Modules (ESM) → import / export

// CommonJS (CJS) → require / module.exports

// 2. CommonJS (CJS) — Node.js Classic Module System
// Used in:

// Older Node.js projects

// Many NPM packages

// Automation frameworks before ESM support

// ✔ Syntax
// module.exports

// require()

let firstname = "Abhishek"
function add(a,b){
    return a+b
}
module.exports={add,firstname}