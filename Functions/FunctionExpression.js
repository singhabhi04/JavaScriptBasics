//Anonymous functions
//An anonymous function is a function that does not have its own name
//  and is typically used when you don’t need to call it directly — something else will call it for you.

const sum =function (a,b){
    let c = a+b
    console.log(`The Sum of ${a} and ${b} is ${c}`)
 }
sum(20,34)
console.log(typeof sum)

const sum2 = sum
sum2(21,21)