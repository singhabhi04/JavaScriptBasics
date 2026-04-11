//Function without Return 
function sum(a,b){
    let c = a+b
   console.log(`The Sum of ${a} and ${b} is ${c}`)
}
// Function Calling
sum(10,20)

//Function with Return 
function add(a,b){
    let c = a+b
   return c;
}
// Function Calling
let SumResult = add(10,20)
console.log(`The Sum result is  ${SumResult}`)

