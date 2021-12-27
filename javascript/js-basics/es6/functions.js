//arrow functions
const sum = (a, b) => a + b
console.log("1 + 2 ", sum(1,2))


//closueres
const addTo = x => y => x + y
var addToTen = addTo(10)
console.log("10 + 5 ", addToTen(5))

//currying - I
const curriedSum = (a) => (b) => a + b
console.log("30 + 1", curriedSum(30)(1));


//currying: II
const curriedSum2 = (a) => (b) => a + b
const add5 = curriedSum2(5)
console.log("5 + 9", add5(9));

//composing
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add6 = (num) => num + 6;
console.log("10 + 1 + 6" , compose(add1, add6)(10));