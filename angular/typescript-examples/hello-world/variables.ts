let found: boolean = true;
let grade: number = 67.98;
let firstName: string = "John";
let lastName: string = 'Doe';


//prvent file generation on error with: tsc -noEmitOnError variables.ts
//compilation errors
//found = 0; //the number is not assignable to boolean
//grade = 'D'; //string is not assignable to number

console.log(found);
console.log("The grade is " + grade);

console.log("Hi " + firstName + " " + lastName);

console.log(`Hi ${firstName} ${lastName}`);
