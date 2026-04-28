const Animals =["Bear","Dog","Tiger","Fox","Cat"]
// Ascending order
//console.log(Animals.sort())
//In case of String ASCII values are compared
//descending order

// a = Current Value , b = Previous Value
//input sequence b,a
const sortedAnimalsdec =Animals.sort((a,b)=>{
           
            if(b>=a){
                return 1;
            }
            else{
                return -1;
            }
})
console.log(sortedAnimalsdec)
// If return is postive no swapping
// If return is negative then swapping