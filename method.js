// object er value object , array hoite pare . abar nested object nested array o hoite pare 
// object er vitore ami caile kono propertyr value hisebe function likte pari.ai function likatakei object er method bole  
const student = {
    id: 101,
    money: 5000,
    name: 'Mahmud Khan ',
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
        // object er kono property access korte caile this likhe setar name likte hobe
    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }
}

student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);

// object er vitore function o likha jai 