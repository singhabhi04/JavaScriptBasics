// Method 1: Using while loop
function reverseNumberWhile(num) {
    let reversed = 0;
   let number = num
    
    while (number > 0) {
        let remainder = number % 10;
        reversed = reversed * 10 + remainder;
        number = Math.floor(number / 10);
        //Math.floor() to ensure integer division since JavaScript doesn't have integer division.
    }
    
    return  reversed;
}



// Test cases
console.log('=== Method 1: While Loop ===');
console.log('Reverse of 12345:', reverseNumberWhile(12345)); // 54321
