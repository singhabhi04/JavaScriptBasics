//1. concat() — Combine arrays without modifying them

let a = [1, 2];
let b = [3, 4];

let result = a.concat(b);

console.log(result); // [1, 2, 3, 4]
console.log(a);      // [1, 2] (unchanged)
//2. join() — Convert array → string

let arr = ["login", "checkout", "logout"];

let str = arr.join(" -> ");

console.log(str); // "login -> checkout -> logout"
//3. sort() — Sorts the array in place
let names = ["john", "alex", "maria"];
names.sort();

console.log(names); // ["alex", "john", "maria"]
//✔ Sorting numbers (important!)
//By default, JS sorts as strings, so numbers break.
let nums = [10, 2, 5, 1];
nums.sort();

console.log(nums); // [1, 10, 2, 5] ❌ (string sort)
