//The reduce() method takes an array and reduces it to a single value by repeatedly applying a reducer function. It works by carrying an accumulator across iterations and combining each element into it
// What reduce() Does (Core Idea)
// Iterates over the array from left to right

// Applies a reducer function on each element

// Carries forward an accumulator

// Returns one final value (number, string, object, array, anything)

// Does not mutate the original array

// Skips empty slots in sparse arrays

// Throws an error if array is empty and no initial value is provided

const number = [10,20,30,50,78,65]
const Sum = number.reduce((sum,value)=>{
    return sum +value

},0)
console.log(Sum)

// minumum number from an Array

const MinValue = number.reduce((min, value)=>
    value< min?value:min
,number[0])

console.log(MinValue)

//
