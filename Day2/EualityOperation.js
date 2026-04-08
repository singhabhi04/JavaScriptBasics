// == loose equality 

let numb1 =78
let numb2 = "78"

if(numb1==numb2){
    console.log("Equal")
}
else{
    console.log("Not Equal")
}

if(numb2==numb1){
    console.log("Equal")
}
else{
    console.log("Not Equal")
}
// JavaScript converts values to different types depending on the operation.
// Think of JS as saying:
// - “If you use + with a string → I’ll convert to string.”
// - “If you use == → I’ll convert to number (most of the time).”
// - “If you use -, *, / → I’ll convert to number.”
// - “If you use a value in if() → I’ll convert to boolean.”
// So the conversion target changes based on context.

// strict equality (===)
if(numb1===numb2){
    console.log("Equal")
}
else{
    console.log("Not Equal")
}