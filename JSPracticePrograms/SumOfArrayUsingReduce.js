const balance = [10,20,30,40,50,60]
// First version
const sumbal =balance.reduce((pv,cv,index,arr)=>{
    console.log(`PV is ${pv} CV is ${cv} Index is ${index} and Array is ${arr}`)
    let sum = pv+cv;
    return sum;
})

console.log(sumbal)

// second version
const sumbalance =balance.reduce((pv,cv,index,arr)=>{
    console.log(`PV is ${pv} CV is ${cv} Index is ${index} and Array is ${arr}`)
    let sum = pv+cv;
    return sum;
},0)

console.log(sumbalance)
