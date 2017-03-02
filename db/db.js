const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://127.0.0.1/api');

module.exports = connection;