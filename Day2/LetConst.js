// 🧩 2. let — modern, block‑scoped, reassignable
// ✔ What it means
// - Block‑scoped → works only inside { }
// - Cannot be redeclared in the same block
// - Can be reassigned
// - Hoisted but not initialized → gives ReferenceError if used before declaration
// ✔ Example 1 — block scope works properly

if (true) {
  let y = 20;
}
console.log(y); // ❌ ReferenceError

//✔ Example 2 — reassignment allowed
let count = 1;
count = 2; // allowed
console.log(count); // 2
//✔ Example 3 — redeclaration NOT allowed
let a = 10;
let a = 20; // ❌ SyntaxError

✔ Example 4 — temporal dead zone (TDZ)

console.log(z); // ❌ ReferenceError
let z = 30;

// 🧩 3. const — modern, block‑scoped, NOT reassignable
// ✔ What it means
// - Block‑scoped
// - Cannot be redeclared
// - Cannot be reassigned
// - Must be initialized at declaration
// ✔ Example 1 — reassignment not allowed
const pi = 3.14;
pi = 3.14159; // ❌ TypeError

// ✔ Example 2 — objects & arrays CAN be modified
// This is the part most beginners misunderstand.
const user = { name: "Abhishek", age: 25 };

// allowed: modifying properties
user.age = 26;

// allowed: adding new properties
user.city = "Pune";

console.log(user); 
// { name: "Abhishek", age: 26, city: "Pune" }

// ❌ not allowed: reassigning the whole object
user = {}; // TypeError