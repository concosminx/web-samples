//Assignment Destructuring
//bind properties to variables
//we can do that with object, arrays and functions

const person = {
    name: "john",
    lastName: "anderson",
    age: 25
};
// const name = person.name
// const lastName = person.lastName
// alias
const { name: firstName, age: old } = person;
// console.log(firstName, old);

//arrays

const distance = [100, 50, 200];

const [home, store, work] = distance;
// console.log(home, store, work);

let num1 = 5;
let num2 = -10;
// let num3 = num1;
// num1 = num2;
// num2 = num3;

[num1, num2] = [num2, num1];

// console.log(num1, num2);

const items = ["orange", "pants"];
const [fruit, , sweets = "candy"] = items;

console.log(fruit, sweets);

// function parameters
function sayName({ name, lastName }) {
    console.log(name);
    console.log(lastName);
}
sayName(person);

function getPerson() {
    return {
        name1: "bob",
        lastName1: "jordan",
        age1: 47
    };
}

const { name1, age1 } = getPerson();

console.log(name1, age1);