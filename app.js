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
  let person = {
    gender: "",
    firstName: "",
    lastName: "",
    age: "",
  }

  person.gender = randChoice(genders);
  person.gender === 'F' ? person.firstName = randChoice(femaleNames) : person.firstName = randChoice(maleNames);
  person.lastName = randChoice(lastNames);
  person.age = Math.floor(Math.random() * 60 + 18)
  people.push(person);
  console.log(people);
}


const peopleJSON = JSON.stringify(people);
console.log(peopleJSON);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});