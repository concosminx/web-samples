//sync vs. async explained :)

console.log('🐇 finishes');
console.log('🐢 finishes');

console.log('---- a new race ----');

setTimeout(() => console.log('🐇 finishes'), 1000);
setTimeout(() => console.log('🐢 finishes'), 900);