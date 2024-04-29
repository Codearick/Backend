function  PersonMaker(name, age){
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`Hello I am a ${name} who can talk`)
        }
    }

    return person
}

let p1 = PersonMaker("Rohan",21) // 
let p2 = PersonMaker("Nirmla", 21)

p1 === p2 // returns false because it has different memory reference.