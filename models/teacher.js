const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const seedData = require('../seed.js');
const connection = require('../db/db');

autoIncrement.initialize(connection);
const teacherSchema =  new Schema({
  name: {type: String, required: true },
  email: {type: String, required: true },
});

teacherSchema.plugin(autoIncrement.plugin, 'Teacher');
const Teacher = connection.model('Teacher', teacherSchema)

module.exports = Teacher;