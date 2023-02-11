function findMeaning() {
    return 42;
}

console.log("Running function", findMeaning());

const mission = process.argv[2];

if (mission === 'learn') {
    console.log('Time to write some code');
} else {
    console.log(`Is ${mission} really more fun ?`);
}

//run in terminal - node hello.js

//in node REPL, type - process to see the information about the process object

//check Node.js documentation https://nodejs.org/api/process.html

/* 
in node REPL, globals:

global
process
module
__filename
require() - used to import functions and modules

*/
