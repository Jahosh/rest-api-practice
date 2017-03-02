const mongoose = require('mongoose');
const Teacher = require('./teacher');
const _ = require('lodash');

module.exports = {
  teachers: {
    get: (cb) => {
      let teachers = Teacher.find({}).then((teachers) => {
        let finalJson = teachers.map( (teacher) => {
          return _.pick(teacher, ['_id', 'name', 'email']);
        });
        cb(finalJson);
        }).catch((err) => {
          throw err;
        });
    },
    getById: (id, cb) => {
      let teacher = Teacher.findOne({'_id': id }).then( (teacher) =>{
        if (!teacher) {
          let msg = `no user found with id of ${id}`;
          return cb(JSON.stringify(msg));
        }
        let teacherJson = _.pick(teacher, ['_id', 'name', 'email']);
        cb(teacherJson);
      })
        .catch( (err) => {
          if (err) throw err;
        });
    },
    post: () => {

    }
  }
}