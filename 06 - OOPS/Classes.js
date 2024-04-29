class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hello ! I'm ${this.name}, and ${this.age} years old`)
    }
}

// const p1 = new Person("Rohan",22)
// const p2 = new Person("Nirmala",22)
// console.log(p1.talk());
// console.log(p2.talk());
// p1.talk === p2.talk // -> returns true

// Inheritance

class Student extends Person{
    constructor(name, age, fees){
        console.log("Inside Student class")
        super(name, age);
        this.fees = fees
    }
}

class Teacher extends Person{
    constructor(name, age, salary){
        console.log("Inside Teacher class")
        super(name, age);
        this.salary = salary
    }
}

// const student1 = new Student("Antarisk", 17, 80)

// const teacher1 = new Teacher("Rohan", 22, 50000);

class Mammal{
    constructor(name){
        this.name = name
        this.type = "Warm Blooded"
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Dog extends Mammal{
    constructor(name){
        super(name)
    }
    bark(){
        console.log(`${this.name} says woof...`)
    }
}

class Cat extends Mammal{
    constructor(name){
        super(name)
    }
    meow(){
        console.log(`${this.name} says meow...`)
    }
}

const dog1 = new Dog("Shiru");
const cat1 = new Dog("Meeru");
