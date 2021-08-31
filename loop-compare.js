const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
/* 
for(let i = 0; i<10;i++){}
for(const num of numbers){} // array, array like object
for(const prop in student){} // object er opor 
*/
for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

// advanced lagte pare 
const entries = Object.entries(bottle);
console.log(entries);
// const [key, value] = ['color', 'yellow'];
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}

//js a array one kind of object . for in diye loop korle akata value diye
// kono akta object er property diye jodi loop calaite cai tahole for in use kortehobe    

// 
// const arr = ['color', 'jeans', 'tom']
// arr['color']