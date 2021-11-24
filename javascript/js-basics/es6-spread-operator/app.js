//Spread Operator
//converts an array to a list of items

// const random = ["something", "random"];
// const moreRandom = random;

// moreRandom[0] = "special";

// console.log(random);
// console.log(moreRandom);

const numbers = [1, 2, 3, 4];
// const values = [...numbers];
// values.push(5);
// console.log(numbers);
// console.log(values);

// const names = ["john", "peter", "bob"];
// const moreNames = ["susy", ...names];

// const evenMoreNames = [...names, "amanda", ...moreNames];

// console.log(names);
// console.log(moreNames);
// console.log(evenMoreNames);

// const list = [...document.querySelectorAll(".list-item")];
// console.log(list);

// const special = list.filter(item => item.classList.contains("special"));

// console.log(special);

function add(num1, num2, num3, num4) {
    let result = num1 + num2 + num3 + num4;
    return result;
}

const result = add(...numbers);

console.log(result);

const letters = "hello there";
const arr = [...letters];
console.log(arr);