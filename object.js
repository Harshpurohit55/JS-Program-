const obj = {
    name: "Harsh",
    age: 27
};

console.log("Hello, My name is " + obj.name + ".I am" + obj.age + "Years old");


// Templeate Litereal

console.log(`Hello My name is ${obj.name}. I am${obj.age} Years old`)


// Destructing 

const person = {
    name: "Harsh",
    age: 27
};

const name = person.name;
const age = person.age;


const { name, age } = person

