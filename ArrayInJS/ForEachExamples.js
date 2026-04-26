// From a given array if value is -ve print debit and if value is positive then +ve

// Implementation with For Of 
const tranasctions = [23, 56, -67, 98, -54]

function validateDebitCredit() {
    for (const trans of tranasctions) {
        if (trans > 0) {
            console.log(`${trans} is Credit`)
        }
        else {
            console.log(`${trans} is Debit`)
        }
    }
}
validateDebitCredit()

console.log(`******For Each Implementation**************`)
// Implementation with For each
tranasctions.forEach((value)=> {
    if (value > 0) {
            console.log(`${value} is Credit`)
        }
        else {
            console.log(`${value} is Debit`)
        }
})