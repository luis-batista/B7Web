// Programação funcional

let person = {
    name: 'Luís',
    lastName: 'Eduardo',
    age: '29',
    getFullName() {
        return `${this.name} ${this.lastName}`
    }
}

console.log(person.getFullName())
