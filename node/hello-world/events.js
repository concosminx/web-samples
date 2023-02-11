const EventEmitter = require('events');

const celebrity = new EventEmitter();

//subscribe to celebrity - Observer 1
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log("Congratulations! You are the best!");
    }
});

//subscribe to celebrity - Observer 1
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log("Boooooo!");
    }
});

process.on('exit', (code) => {
    console.log(`Process exit event with code ${code}`);
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');

