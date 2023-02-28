const express = require('express');
//const cluster = require('cluster');
//var numCPUs = require('os').cpus().length;

const app = express();

function delay(duration) {
    const startTime = Date.now(); //millis
    while (Date.now() - startTime < duration) {
        //nothing
        //will stay on the event loop and block it
    }
}

app.get('/', (req, res) => {
    //other examples of blocking functions
    
    //JSON.stringify({});
    //JSON.parse("{}");

    //[4,5,6,1,2].sort()

    //functions from crypto module

    res.send(`Performance example ${process.pid}`);
});


app.get('/timer', (req, res) => {
    delay(5 * 1000);
    res.send(`Beep Beep! ${process.pid}`);
});


console.log('Running server.js ');
// if (cluster.isMaster) {
    // console.log('Master has been started');
    
    // for (let i = 0; i < numCPUs; i++) {
    //   cluster.fork();
    // }
// } else {
    console.log('Worker process started');
    app.listen(3000);
// }

//npm install pm2 --global

//pm2 start server.js 
//pm2 status
//pm2 stop [process_id]
//pm2 delete server
//pm2 start server.js -i 2 // or use max
//pm2 logs
//pm2 logs --lines 200
//pm2 start server.js -l logs.txt -i max
//pm2 show 0
//pm2 stop [process_id]
//pm2 monit
//pm2 restart server
//zero downtime ... this will restart processes one by one
//pm2 reload server 