// Classes: Variáveis/ Método estático

class Person {
    age = 0;

    static hands = 2;

    constructor(name) {
        this.name = name;
    }

    saiHi() {
        console.log(`Olá, eu sou ${this.name} e tenho ${Person.hands} mãos!`);
    }
}

let p1 = new Person("Luís");
p1.saiHi();