let str = "Hi I am Abhishek , I am Tech lead in Infosys"

//length - > It is a property of string not a Method in JS
console.log(str.length)
console.log(str.charAt(6))
console.log(str.at(6))
console.log(str.at(600))// undefined
console.log(str.charAt(600))// empty String
console.log(str.charCodeAt(6)) // Returns ASCII value-->UT-8
console.log(str.codePointAt(6)) // Returns ASCII value-->UTF 16

// Conacatination
let fName = "ABHISHEK"
let lName = "SINGH"
let fullName = fName.concat(" ").concat(lName)

console.log(fullName) 
//Seraching
console.log(str.includes("Abhishek"))
console.log(str.startsWith("Name"))
console.log(str.endsWith("Infosys"))
console.log(str.endsWith("INFOSYS"))

//Indexing

console.log(str.indexOf("Abhishek"))
console.log(str.lastIndexOf("am"))

//trim

const str1 = " Abhishek "
console.log(str1)
console.log(str1.trim())
console.log(str1.trimEnd())
console.log(str1.trimStart())

// Repeat
let str2 = "Jai Shri Ram"
console.log(str2.repeat(5))

// Replace 

console.log(str.replace("Abhishek","Abhi"))
console.log(str)
console.log(str.replaceAll("I am","I'm"))

// Split
const SplitDemo = str.split(" ")
console.log(SplitDemo)
console.log(SplitDemo[0])
console.log(typeof SplitDemo)

// slice vs Substring
// Shortest, clearest takeaway:  
// Use slice() in modern JavaScript. It is predictable, supports negative indexes, and does not swap arguments.
// substring() is older and has quirky behavior.

// Below is the structured, citation‑grounded breakdown you prefer, Abhishek.

// ✅ Core Difference
// slice(start, end)

// Supports negative indexes

// If start > end → returns ""

// More predictable

// Does not modify original string


// substring(start, end)

// Does NOT support negative indexes (negative → treated as 0)

// If start > end → swaps arguments

// Also returns a new string
console.log("abcdef".slice(-3) )  // "def"

console.log("abcdef".substring(-3))  // "abcdef"//substring() treats negative as 0.
console.log("abcdef".slice(4, 2))     // ""
console.log( "abcdef".substring(4, 2))   // "cd"
// slice() → empty string

// substring() → swaps arguments