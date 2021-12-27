//includes

//array
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log("includes John ? ", dragons.includes('John'));


//strings
console.log("includes John", dragons.filter(name => name.includes('John')));

//pwoer
const power10 = (num) => num**10;
console.log("RAM? ", power10(2));