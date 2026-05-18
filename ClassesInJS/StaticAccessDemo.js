class Employee{

#firstname;
static CompanyName;

constructor(firstname){
this.#firstname=firstname;
}

#getFirstname(){
    return this.#firstname
}

}

const Emp1 = new Employee("Abhishek");

const Emp2 = new Employee("Upendra");
// Emp1.CompanyName="Infosys"
// console.log(Emp1.CompanyName)
// console.log(Emp2.CompanyName)
// console.log(Employee.CompanyName)

Employee.CompanyName="Infosys"
console.log(Employee.CompanyName)
console.log(Emp1.CompanyName)
console.log(Emp2.CompanyName)
