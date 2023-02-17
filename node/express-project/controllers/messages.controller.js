const path = require('path');

function getMessages(req, res) {
  // res.send('<ul><li>Hello my friend!</li></ul>');
  res.sendFile(path.join(__dirname, '..', 'public', 'images', 'ski.png'));
}

function postMessage(req, res) {
  console.log('Updating messages ...');
}

module.exports = {
  getMessages,
  postMessage
}