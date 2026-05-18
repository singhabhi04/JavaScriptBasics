class Animal{
    name;
    #type

    constructor(name,type){
        this.name=name;
        this.type = type;
    }

    walk(){
        console.log(`${this.name} is walking`) 
    }
     run(){
        console.log(`${this.name} is Running`) 
    }
}

export {Animal}