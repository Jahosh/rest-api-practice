const mongoose = require('mongoose');
const Teacher = require('./teacher');
const Student = require('./student');
const _ = require('lodash');

module.exports = {
  teachers: {
    get: (cb) => {
      let teachers = Teacher.find({}).then((teachers) => {
        let finalJson = teachers.map( (teacher) => {
          return _.pick(teacher, ['_id', 'name', 'email']);
        });
        cb(finalJson);
      })
      .catch((err) => {
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
    post: ({name, email}, cb) => {
      let teacher = new Teacher({
        name,
        email
      }).save()
      cb();
    }
  },
  students: {
    get: (cb) => {
      let students = Student.find({}).then( (students) => {
        let finalJson = students.map( (student) => {
           return _.pick(student, ['_id', 'name', 'email']);
        });
        cb(finalJson);
      })
      .catch( (err) => {
        if (err) throw err;
      });

    },
    getById: (id, cb) => {
      let student = Student.findOne({'_id': id }).then( (student) =>{
        if (!student) {
          let msg = `no student found with id of ${id}`;
          return cb(JSON.stringify(msg));
        }
        let studentJson = _.pick(student, ['_id', 'name', 'email']);
        cb(studentJson);
      })
      .catch( (err) => {
        if (err) throw err;
      });
    },
    post: ({name, email}, cb) => {
      let student = new Student ({
        name,
        email
    }).save()
    cb();
    }
  }
}