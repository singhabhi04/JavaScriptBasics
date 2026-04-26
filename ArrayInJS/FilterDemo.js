//The filter() method in JavaScript creates a new array containing only the elements that pass a test (return true) in your callback function. It never mutates the original array. 
// Goes through each element of an array

// Runs your test function

// Keeps the element only if the test returns truthy

// Returns a new filtered array

// Skips empty slots in sparse arrays

// Does not modify the original array

const nums = [12, 5, 8, 130, 44];
const greaterThanTen = nums.filter(value => {
    if (value > 10) {
        return true
    }
    else {
        return false
    }
})
console.log(greaterThanTen)