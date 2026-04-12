// A Higher‑Order Function is a function that either:
// Takes another function as input, or
// Returns a function
// Example of Returns a function
//A Higher‑Order Function can return another function,
//  allowing you to create customized functions on the fly.
//Example 1

function createGreeter(greeting){
    return function(name){
        console.log(`${greeting}, ${name}!`)
    }
}

const sayHello = createGreeter("Hello");
const sayWelcome = createGreeter("Welcome");

sayHello("Abhishek")
sayWelcome("Abhishek")

// createGreeter is a HOF because:
// It returns a function
// That returned function remembers the value of greeting (closure)

//Example 2
function createDiscount(discountPercent) {
    return function(price) {
        return price - (price * discountPercent / 100);
    };
}
const tenPercentOff = createDiscount(10);
const twentyPercentOff = createDiscount(20);
console.log(tenPercentOff(100));    // 90
console.log(twentyPercentOff(100)); // 80
