const mongoose = require('mongoose');
const Teacher = require('./teacher');
const _ = require('lodash');


module.exports = {
  teachers: {
    get: (cb) => {
      let teacher = Teacher.find({}).then((teachers) => {
        let finalJson = teachers.map( (teacher) => {
          return _.pick(teacher, ['_id', 'name', 'email']);
        });
        cb(finalJson);
        }).catch((err) => {
          throw err;
        });
    },
    post: () => {

    }
  }
}