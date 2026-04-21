//forEach() is an array method that lets you run a function once for every element in the array.
// Key Points
// Works only on arrays

// Does NOT return a new array (unlike map)

// Does NOT support break, continue, or return to stop the loop

// Does NOT modify the original array unless you explicitly change values
//You can modify the array inside forEach():

const number = [10,20,30,40,50]

number.forEach((a)=>console.log(a))

number.forEach((a,b)=>console.log(a,b))

let colors = ["red", "green", "blue"];

colors.forEach((value, index, arr) => {
  console.log(value, index, arr);
});
//Modifying Array elements
let nums = [1, 2, 3];

nums.forEach((value, index, arr) => {
  arr[index] = value * 10;
});

console.log(nums); // [10, 20, 30]
