const startLine = '     ||<- Start line';
let turtle = 'X';
let rabbit = 'Y';


console.log(startLine);
console.log(turtle);
console.log(rabbit);


turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);


turtle = turtle.trim().padEnd(9, '=');

let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

const result = Object.entries(obj).map(value => value.join(" ")).join(' ');
console.log(result);