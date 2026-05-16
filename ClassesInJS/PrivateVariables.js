class Employee {
  // 🔒 Private fields (cannot be accessed outside the class)
  #firstname;
  #lastname;
  #age;

  constructor(firstname, lastname, age) {
    console.log("Constructor called");
    this.#firstname = firstname;
    this.#lastname = lastname;
    this.#age = age;
  }

  // 👉 Instance method
  getFullName() {
    return `${this.#firstname} ${this.#lastname}`;
  }

  // 👉 Instance method
  getAge() {
    return this.#age;
  }

  // ⭐ Static method (belongs to the class, not objects)
  static isAdult(age) {
    return age >= 18;
  }

}

// ------------------ Usage ------------------

const E1 = new Employee("Abhishek", "Singh", 36);

console.log(E1.getFullName()); // Abhishek Singh
console.log(E1.getAge());      // 36

// Using static method
console.log(Employee.isAdult(36)); // true

//console.log(E1.#age)-- will throw error
