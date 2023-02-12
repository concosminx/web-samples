const express = require('express');
const messageController = require('./controllers/messages.controller');
const friendsController = require('./controllers/friends.controller');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  //actions go here
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta} ms`);
});

app.use(express.json());

// app.get('/', (req,res) => {
//   //res.send('Hello world!');
//   res.send({
//     id: 2, 
//     name: 'Isaac Newton'
//   });
// });

app.get('/friends', friendsController.getFriends);

app.get('/friends/:friendId', friendsController.getFriend);

app.post('/friends', friendsController.postFriend);

app.get('/messages', messageController.getMessages);

app.post('/messages', messageController.postMessage);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
