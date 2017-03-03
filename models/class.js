const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const connection = require('../db/db');

autoIncrement.initialize(connection);
const classSchema =  new Schema({
  code: {type: String, required: true },
  name: {type: String, required: true },
});

classSchema.plugin(autoIncrement.plugin, 'Class');
const Class = connection.model('Class', classSchema);

module.exports = Class;