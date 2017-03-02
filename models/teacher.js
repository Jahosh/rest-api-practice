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


/*
 * Seed Database
 * 
*/

let teachers = seedData.teachers;

// teachers.forEach( (teacher) => {
//   let data = new Teacher({
//     name: teacher.name,
//     email: teacher.email
//   });
//   data.save();
// })




module.exports = Teacher;