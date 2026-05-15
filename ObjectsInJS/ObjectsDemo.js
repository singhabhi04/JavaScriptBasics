//An object is a dynamic data structure that stores related data as key-value pairs(key:value), where each key uniquely identifies its value.
//The values of properties can be primitives, objects, or functions (known as methods when defined inside an object).
//Objects are mutable and dynamic properties can be added, modified, or deleted at any time.



const userDeatils = {
    name :"Abhishek",
    age:36,
     greet: function () {
    return"Hello Abhishek!";
  },
     marks: {
    math: 90,
    science: 85
  },
  skills :['Java','JS','Python'],
    nickname: undefined,
     middleName: null
};
console.log(typeof userDeatils)
console.log(userDeatils.name)
console.log(userDeatils.greet())
console.log(userDeatils.marks.math)
console.log(userDeatils.skills[0])
console.log(userDeatils.nickname)
console.log(userDeatils.middleName)
//adding elements
userDeatils.address ="Rokcyhill"
console.log(userDeatils)
//deleting elements
delete userDeatils.middleName

console.log(userDeatils)