// Classes: Instância

class Person {
    constructor(name, age) {
        this.name = name;
        this.age =  age;
    }
}

let p1 = new Person ("Luís", 29)

console.log(`Olá ${p1.name}, sua idade é: ${p1.age}`)