//The map() method in JavaScript creates a new array by transforming each element of an existing array using a callback function. It never mutates the original array
// ⭐ What map() Does (Core Idea)
// Takes an array

// Runs a callback function once for each element

// Returns a new array with transformed values

// Does NOT modify the original array

// Skips empty slots in sparse array

const tranasctions = [23, 56, -67, 98, -54]

const trans =tranasctions.map((value)=>{
    if(value<0){
        console.log(`${value} is a Debit Transaction`)
        return value
    }
    else if(value>0)
    {
        console.log(`${value} is a Credit Transaction`)
        return value
    }
})

console.log(trans)