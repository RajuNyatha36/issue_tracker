require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect(
  process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/issue_tracker_local'
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', function () {
  console.log('Connected to Database :: MongoDB');
});

module.exports = db;
