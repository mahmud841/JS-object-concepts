// 1. using object literal
const student = { name: 'Sakib AL Hasan', job: 'cricketer' };
// 2. constructor
const person = new Object();

// 3. 
// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.job);

// 4. class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 12);
// console.log(peop);

// 5. function
function Manusi(name) {
    this.name = name;
}
const man = new Manusi('Abdul kader');
console.log(man);

// most of the case a using object letarel use korbo . programming a akta kaj onek vabe kora jai proyojone segula sikhar pation raklte hobe 