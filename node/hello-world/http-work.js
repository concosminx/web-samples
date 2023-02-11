//separate modules for http | https 
//const http = require('https');
//const { request } = require('https');
const { get } = require('https');

//const req = http.request('https://www.google.com', (response) => {
//const req = request('https://www.google.com', (response) => {
get('https://www.google.com', (response) => {
    response.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });

    response.on('end', () => {
        console.log('No more data!');
    });
});

//req.end(); //need to call end in order to send the request