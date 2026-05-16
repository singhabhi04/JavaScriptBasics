//1. Instance Method → Instance Variable (Allowed)
class Demo1 {
  constructor() {
    this.x = 10;
  }

  show() {
    console.log(this.x); // ✔ works
  }
}
const d1 = new Demo1();
d1.show();


//2. Instance Method → Static Variable (Allowed, but NOT via this)
class Demo2 {
  static count = 5;

  show() {
    console.log(Demo2.count); // ✔ correct
    console.log(this.count);  // ❌ undefined
  }
}
const d2 = new Demo2();
d2.show();


//3. Static Method → Instance Variable (NOT Allowed)
class Demo3 {
  constructor() {
    this.x = 10;
  }

  static test() {
    console.log(this.x); // ❌ undefined (static cannot access instance)
  }
}

Demo3.test();  // ✔ Correct way (call static method on class)


//4. Static Method → Static Variable (Allowed)
class Demo4 {
  static count = 5;

  static show() {
    console.log(Demo4.count); // ✔
    console.log(this.count);  // ✔
  }
}

Demo4.show(); // ✔ Correct way (static method on class)
