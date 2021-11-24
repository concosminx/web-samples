//Arrow Functions or Fat Arrow Functions
//no name;
//no function keyword
//paramaters and return statement;

//no parameters
function sayHi() {
    console.log("hello");
}
// sayHi();
// const hello = function(name) {
//   console.log(`hello ${name}`);
// };
// hello("bob");
//zero parameters
let hello = () => console.log("hello");
// hello();

//one paramter
function triple(num) {
    return num * 3;
}

let double = num => num * 2;
let num = double(4);
// console.log(num);

//two parameters and more than one line
let multiply = (num1, num2) => {
    const result = num1 * num2;
    return result;
};
let sum = multiply(4, 4);
// console.log(sum);

const obj = () => ({ name: "bob", age: 25 });

const person = obj();
console.log(person);

const numbers = [1, 2, 3, 4, 5, 6];

const big = numbers.filter(number => number > 2);

console.log(big);

document
    .getElementById("btn")
    .addEventListener("click", () => console.log("you clicked me"));