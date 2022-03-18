//basic loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//reviews
let reviews: number[] = [5, 5, 4.5, 1, 3];

let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
  total += reviews[i];
}

let average: number = total / reviews.length;
console.log("Review average = " + average);

//sports
let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let tempSport of sportsOne) {
  if (tempSport === "Cricket") {
    console.log(tempSport + " << My Favorite!");
  } else {
    console.log(tempSport);
  }
}

//growable
let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"];

sportsTwo.push("Baseball");
sportsTwo.push("Futbol");

for (let tempSport of sportsTwo) {
  console.log(tempSport);
}