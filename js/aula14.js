// Herança

const defaultUser = {
    name: '',
    email: '',
    level: '2'
}

let user1 = {
    ...defaultUser,
    name: 'Luís',
    email: 'dudu@gmail.com',
    level: '1'
}

let user2 = {
    ...defaultUser,
    name: 'Sandro',
    email: 'sandro@gmail.com',
}

console.log(user2)