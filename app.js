favMovie = (name, movie) => console.log(`My name is ${name} and my favorite movie is ${movie}`);


favMovie('Byron', 'Gladiator');


let myName = 'Byron Baldwin';
let firstName = myName.split(' ');

let getFirstName = () => {
console.log(firstName[0])
};


getFirstName('Byron Baldwin');


let getFirstNameConcise = () => console.log(firstName[0]);

getFirstNameConcise('Byron Baldwin');

let getMath = (a,b) => ({
    product: a * b,
    power: a ** b
});

console.log(`product: ${getMath(3,5).product}, power: ${getMath(3,5).power}\n`);

let myProfile = (name, location, favFood) => {
    console.log(`${name}, ${location}, ${favFood}`)
};

let array = ['byron', 'birmingham', 'steak' ];


myProfile(...array);


function myTitle(manager) {
    let profession = [...manager];
    profession.forEach((char) => {
        console.log(char);
    });
}

let byron = 'byron';

myTitle(byron);

myTitle(byron);

myTitle(byron);

