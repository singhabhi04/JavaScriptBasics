const numb = [65,34,56,32,45,66,89,21,90]

console.log(numb.pop())
console.log(numb)
console.log(numb.shift())
console.log(numb)
const numb1 = [65,34,56,32,45,66,89,21,90]
console.log(numb1.splice(2,5))
console.log(numb1)
//1. Removing Elements
let arr = [10, 20, 30, 40, 50];

let removed = arr.splice(1, 2);   // remove 20, 30

console.log(arr);     // [10, 40, 50]
console.log(removed); // [20, 30]

//2. Adding Elements
let arr2 = ["login", "checkout", "logout"];

arr2.splice(1, 0, "search");  // insert at index 1

console.log(arr2); // ["login", "search", "checkout", "logout"]
//3. Replacing Elements
let arr3 = ["pass", "fail", "skip"];

arr3.splice(1, 1, "error");  // replace "fail" with "error"

console.log(arr3); // ["pass", "error", "skip"]
