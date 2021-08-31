const mahmud = {
    id: 101,
    money: 5000,
    name: 'Mahmud Khan',
    treatDey: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log('here55554', this);
        return this.money;
    }
}

const heroKhan = {
    id: 102,
    money: 6000,
    name: 'Hero Khan'
}
const golamKhan = {
    id: 102,
    money: 8000,
    name: 'Golam Khan'
}
//call korte hobe 
/* mahmud.treatDey.call(heroBalam, 500, 100, 50);
mahmud.treatDey.call(heroBalam, 300, 50, 30);  */


//call er kasakasi apply .difference hosse call korle parameter gula coma diye likte hobe r apply korle array akare likte hobe 
 mahmud.treatDey.apply(heroKhan, [500, 100, 50]);
mahmud.treatDey.apply(heroKhan, [1000, 200, 100]);

mahmud.treatDey.apply(golamKhan, [700, 100, 70]) ;

// bind ,call ,apply kaj almost same . kaj hosse akjoner godown theke product niye ase onno object er jonne use kora . bind diye korle se akta function dibe sei function bar bar call kore use kora. r call or apply korle direct kora jabe alada function lagbe na 
// interview question : difference between bind call apply 