// Classes: Action

class Person {

    steps = 0;

    constructor(name, age) {

        this.age = age;
        this.name = name;
    }

    takeAStep() {
        this.steps++;
    }

}

let p1 = new Person ("Luís");

p1.takeAStep();

console.log(`${p1.name} Deu ${p1.steps} passos.`);