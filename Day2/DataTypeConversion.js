let age =36;
let friendAge="36"
console.log(typeof(friendAge))
// number to String

let numbStr = String(age)
console.log(numbStr)
console.log(typeof(numbStr))

//String to Number 

let rollnumber = "55"
let convRollNumber = Number(rollnumber)
console.log(convRollNumber)
console.log(typeof(convRollNumber))
//NAN ---> When you try to convert and string(alphabets) to a  Number
let city = "Kolkata"
console.log(Number(city))