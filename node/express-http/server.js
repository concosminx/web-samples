const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/public'));

// app.use((req, res, next) => {
//     console.log('<h1>HELOOOO</h1>');
//     next()
// });
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

// app.get('/', (req, res) => {
//     res.send("getting root");
// });

// app.get('/profile', (req, res) => {
//     res.send("getting profile");
// });

// app.get('/:id', (req, res) => {
//     console.log(req.params);
//     res.status(404).send("not found");
// });


// app.post('/profile', (req, res) => {
//     console.log(req.body);

//     res.send("succes");
//     //const user = {
//     //    name: 'Sally',
//     //    hobby: 'soccer'
//     //}
//     //res.send(user);
// });


app.listen(3000);



// const http = require('http');
// const server = http.createServer((request, response) => {
//     //console.log('headers', request.headers);
//     //console.log('method',request.method);
//     //console.log('url',request.url);

//     //response.setHeader('Content-Type', 'text/html');
//     //response.end('<h1>Helooo</h1>');

//     const user = {
//         name: 'John',
//         hobby: 'Skating'
//     }
//     response.setHeader('Content-Type', 'application/json');
//     response.end(JSON.stringify(user))
// })

// server.listen(3000);