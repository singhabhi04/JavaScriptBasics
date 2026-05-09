console.log('BEGIN')
setTimeout(()=>{
    console.log('Set Timeout 1 ')
},5000)

setTimeout(()=>{
    console.log('Set Timeout 2 ')
},1000)
console.log('END')

//SetTimeout 2 is coming in Call back queue before SetTimeout 1 so executed before