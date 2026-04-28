// This script demonstrates sorting an array of numbers in JavaScript.
// The sort() method without a comparator sorts elements as strings.
// With a comparator function, it sorts numerically.

const transactions = [10,30,4,54,22,56]

// Default sort (as strings)
console.log(transactions.sort())

// Sort in ascending order
console.log(transactions.sort((a,b)=>(a-b)))
// Sort in descending order
console.log(transactions.sort((a,b)=>(b-a)))
//Ascending sort: transactions.sort((a, b) => (a - b))
//Compares elements a and b. If a - b is negative, a comes before b (ascending order). This sorts numbers from smallest to largest.

//Descending sort: transactions.sort((a, b) => (b - a))
//Compares elements a and b. If b - a is negative, b comes before a (descending order). This sorts numbers from largest to smallest.