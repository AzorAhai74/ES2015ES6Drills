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