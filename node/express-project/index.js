const express = require('express');
const path = require('path');

const { friendsRouter } = require('./routes/friends.router');
const { messageRouter } = require('./routes/messages.router');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  //actions go here
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta} ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
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
