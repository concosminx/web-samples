//Template Literals

const name = "bob";
const lastName = "sanders";
const age = 25;
// const phrase =
//   "My full name is " + name + " " +lastName + ". And I'm " +  age +" years old";
const phrase = `My full name is ${name} ${lastName}.And I'm ${age} years old`;
console.log(phrase);

const div = document.createElement("div");
// div.innerHTML = "<p>" + name + "</p>" + "<p>" + lastName + "</p>";

div.innerHTML = `
<h1>My name is :${name}</h1>
<h3>My last name is :${lastName}</h3>
<h6>My age is :${age}</h6>
<p>${phrase}</p>

`;

document.body.appendChild(div);