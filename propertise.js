const myBottle = {
    color: 'yellow', // key value pair 
    hold: 'water',
    price: 50,
    isCleaned: true
};
// object er jotogula property ase tar sob namm pabar way
// getting all properties names
const keys = Object.keys(myBottle);
// console.log(keys);

// get all values from object 
const values = Object.values(myBottle);
// console.log(values);

//key and value pair moto pete caile entries use korte hobe
const pairs = Object.entries(myBottle);
console.log(pairs);

// seal marle delete hobe na .kono property notun plus kora jabe na 
// Object.seal(bottle); 
Object.freeze(myBottle);

// freeze korle sob freeze kore dibe no change 
myBottle.price = 100;
myBottle.height = 17;
delete myBottle.isCleaned;
console.log(myBottle);