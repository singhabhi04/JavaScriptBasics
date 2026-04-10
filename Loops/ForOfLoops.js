// A for…of loop in JavaScript is used to iterate over values of an iterable (arrays, strings, maps, sets, etc.). 
// You use it when you want clean, readable access to each value 
// without dealing with indexes or object keys. It provides simplicity, safety, 
// and better readability compared to traditional loops.

let marks = [56,76,87,90,43,86,88]
console.log(marks)
 console.log("********************>>>>")
 // In a for…of loop, use const when the loop variable should not be reassigned, 
 // and use let only when you must reassign the loop variable.
for(let mark of marks){
    console.log(mark)
}
 console.log("********************>>>>")
for(const mark of marks){
    console.log(mark)
}
 console.log("********************>>>>")
for(const mark of marks){
   // mark = mark+10;
    console.log(mark)
}
  console.log("********************>>>>")
for(let mark of marks){
    mark = mark+10;
    console.log(mark)
}