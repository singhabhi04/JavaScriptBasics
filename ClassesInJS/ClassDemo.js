// A class in JavaScript is a blueprint for creating objects.
// It defines:
// Properties (data)
// methods (functions)
// constructor (initial setup)
// Classes were introduced in ES6 (2015) and are basically syntactic sugar over JavaScript’s prototype system.

class Employee {

    firstname;
    lastname;
    age;

    constructor(firstname, lastname, age) {
        console.log('Constructor called ')
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    getFullName() {

        return `${this.firstname} ${this.lastname}`
    }

    getAge() {

        return this.age;
    }


}

const E1 = new Employee("Abhishek", "Singh", 36);

console.log(E1.getFullName());
console.log(E1.getAge());
