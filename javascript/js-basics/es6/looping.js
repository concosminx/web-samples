//looping

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//standard
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//foreach
basket.forEach(item => {
  console.log(item);
})

//in
for (item in detailedBasket) {
  console.log(item);
}

//of
for (item of basket) {
  console.log(item);
}