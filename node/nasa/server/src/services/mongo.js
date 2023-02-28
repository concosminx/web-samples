const { MONGO_URL } = require('./config');
const mongoose = require('mongoose');

mongoose.connection.on('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    mongoose.set('strictQuery', true);
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true
    });
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}