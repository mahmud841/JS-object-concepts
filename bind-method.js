const mahmud = {
    id: 105,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('here5555', this);
        return this.money;
    }
}

const mahmudKhan = {
    id: 107,
    money: 6000,
    name: 'Hero Balam'
}
const golamKhan = {
    id: 102,
    money: 8000,
    name: 'Golam Khan'
}

mahmud.treatDey(100);
const heroTreatDey = mahmud.treatDey.bind(mahmudKhan);
heroTreatDey(500);
heroTreatDey(300);
heroTreatDey(500);
mahmud.treatDey(400);
const normalTreatDey = mahmud.treatDey.bind(golamKhan);
normalTreatDey(2000);

// kono akta object er jodi kono akta method thake tahole ami onno object er jonne seita use korte parbo . bind kokre baki argument pass  korar maddhome