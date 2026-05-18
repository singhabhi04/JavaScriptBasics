import { Animal } from './Animal.js'

class Dog extends Animal {
    breed;
    constructor(breed, name, type) {
        super(name, type)
        this.breed = breed
    }
bark(){
    console.log(`${this.name} is Barking`)
}
run(){
    console.log(`Dog ${this.name } is Running very fast`)
}
}

const dog1 = new Dog("GS","TOM","ASAIN");
dog1.bark()
dog1.run()