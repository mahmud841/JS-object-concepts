console.log(this);
const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDeyArrow: () => {
        console.log(this);
    },
    treatDeyInside: function () {
        const myArrow = () => console.log(this);
        myArrow();
    },
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('here5555', this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}

function add() {
    console.log(this);
}


//What is window in JS: 
// arrow function nijer this er value ke hold kor erakte pare na .arrow function er nijer this hoina 
//this hosse execution context .change hoi execution er opor depend kore 