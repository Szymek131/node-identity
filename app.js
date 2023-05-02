const fs = require('fs');

const genders = ['F', 'M'];
const maleNames = ['Johnny', 'Dave', 'Preston', 'Tom', 'Steve'];
const femaleNames = ['Lara', 'Claudia', 'Julia', 'Annie', 'Lydia'];
const lastNames = ['Smith', 'Parker', 'Pontius', 'Endland', 'Knoxvile'];
const people = [];

const randChoice = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex];
}

for (i = 0; i < 20; i++) {
  const person = {
    gender: randChoice(genders),
    firstName: "",
    lastName: randChoice(lastNames),
    age: Math.floor(Math.random() * 60 + 18),
  }

  person.gender === 'F' ? person.firstName = randChoice(femaleNames) : person.firstName = randChoice(maleNames)
}


const peopleJSON = JSON.stringify(people);
console.log(peopleJSON);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});