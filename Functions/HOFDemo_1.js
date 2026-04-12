// A Higher‑Order Function is a function that either:
// Takes another function as input, or
// Returns a function
// Example of Takes another function as input

function calculate(a,b,operation){
    return operation(a,b)
}

function addition(a,b){
    return a+b
}

function substraction(a,b){
    return a+b
}

function multiplication(a,b){
    return a+b
}

function division(a,b){
    return a+b
}

console.log(calculate(2,3,addition))
console.log(calculate(6,3,division))
