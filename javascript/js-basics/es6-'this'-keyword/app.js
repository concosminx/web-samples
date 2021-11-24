//Arrow Functions and Lexical Scoping
//in the body of arrow function this point to containing scope;

function UI(number) {
    this.number = number;
}

UI.prototype.addNumber = function() {
    console.log(this);

    document.getElementById("btn").addEventListener("click", () => {
        console.log(this);

        console.log(this.number++);
    });
};
const ui = new UI(0);
ui.addNumber();

// const clock = {
//   time: 0,
//   stopWatch: function() {
//     // console.log(this);
//     const self = this;
//     setInterval(function() {
//       // console.log(self);

//       console.log(self.time++);
//     }, 1000);
//   }
// };
// clock.stopWatch();

// const clock = {
//   time: 0,
//   stopWatch: function() {
//     setInterval(() => {
//       console.log(this.time++);
//     }, 1000);
//   }
// };
// clock.stopWatch();