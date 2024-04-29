//Constructors -> Doesn't return anything and starts with capital letter
function Person(name, age){
    this.name = name, 
    this.age = age
}

Person.prototype.talk = function() {
    console.log(`I am ${this.name} & ${this.age} years old`)
}

let p1 = new Person("Rohan", 22)
let p2 = new Person("Nirmala", 22)

console.log(p1.talk());
console.log(p2.talk());
