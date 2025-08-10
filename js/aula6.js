// Classes: Getter e Setter

class Person {
    _age = 29
    steps = 0

    constructor(firstName, lastName) {
        this.firstName =  firstName;
        this.lastName = lastName
    }

    takeAStep() {
        this.steps++
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    get age() {
        return this._age
    }

    set age(x) {
        this._age = x
    }
    
}



let p1 = new Person ("Luís", "Batista");
p1.age = 12;
console.log(`${p1.fullName} tem ${p1.age} anos!`)