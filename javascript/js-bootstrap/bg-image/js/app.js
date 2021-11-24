// immediate invoked function expression

(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];
  let counter = 0;
  // select both buttons
  const btn = document.querySelectorAll(".btn");

  // attach click event
  btn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      //get evetn target
      let value = event.target;
      // console.log(value);

      if (
        value.parentElement.classList.contains("btn-left") ||
        value.classList.contains("btn-left")
      ) {
        counter--;
        if (counter < 0) {
          counter = pictures.length - 1;
        }
        // console.log(counter);

        document.querySelector(
          ".img-container"
        ).style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
      }
      if (
        value.parentElement.classList.contains("btn-right") ||
        value.classList.contains("btn-right")
      ) {
        counter++;
        if (counter > pictures.length - 1) {
          counter = 0;
        }
        // console.log(counter);

        document.querySelector(
          ".img-container"
        ).style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
      }
    });
  });
})();
