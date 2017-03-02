const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const connection = require('../db/db');

autoIncrement.initialize(connection);
const studentSchema =  new Schema({
  name: {type: String, required: true },
  email: {type: String, required: true },
  classes: { type: Array, default: [] }
});


studentSchema.plugin(autoIncrement.plugin, 'Student');
const Student = connection.model('Student',studentSchema);


module.exports = Student;