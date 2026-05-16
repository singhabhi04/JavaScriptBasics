class Employee {
  #salary = 50000;        // instance private field
  static company = "Infosys"; // static variable

  constructor(name) {
    this.name = name;
  }

  // Instance method
  getDetails() {
    console.log(`${this.name} works at ${Employee.company}`);
    console.log(`Salary: ${this.#salary}`);
  }

  // Static method
  static showCompany() {
    console.log(Employee.company); // ✔ allowed
    // console.log(this.#salary);  // ❌ NOT allowed
  }
}

const e1 = new Employee("Abhishek");
e1.getDetails();

Employee.showCompany();
