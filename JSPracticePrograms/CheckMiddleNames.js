const customerNames = ['Abhishek Kumar Singh','Sweta Priya','Ayansh Singh',"Abhisa Singh","Naveen kumar Jena"]

// find count of customers who have middle name

const f1=customerNames.map((name)=>{
   if( name.split(" ").length ===3){
    return name;
   }
}).filter((name)=>{
    if(name !=undefined){
        return name;
    }
}).reduce((pv,name)=>{
    return pv+1
},0)


console.log(f1)