// Criando os chars

let log = new Log(document.querySelector('.log'))

let char = new Knigth ('Luís');
let monster = new BigMonster();

const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()

/* console.log(monster.name);
console.log(monster.life);
console.log(monster.attack) */