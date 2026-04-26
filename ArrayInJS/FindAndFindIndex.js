const number = [23,45,67,87,32,45]

const numb =number.find(value=>{
    if(value===45){
        return true
    }
})
console.log(numb)

const numbIndex =number.findIndex(value=>{
    if(value===45){
        return true
    }
})
console.log(numbIndex)