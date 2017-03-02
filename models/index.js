const mongoose = require('mongoose');
const Teacher = require('./teacher');
const Student = require('./student');
const Class = require('./class');
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
    post: ({name, email, classes}, cb) => {
      let confirmedClasses = [];
      let count = 0

      //checks for class existence in db
      //in the future would we want to let user know of
      //non-existent class id ?
      classes.forEach( (classId) => {
        Class.findOne({_id: classId }).then( (_class) => {
          if (_class) {
            confirmedClasses.push(_class._id);
          }
          count++
          if (count === classes.length) {
            let student = new Student ({
              name,
              email,
              classes: confirmedClasses
            }).save()
            cb();
          }
        });
      });
    }
  },
  classes: {
    get: (cb) => {
      let classes = Class.find({}).then((classes) => {
        let finalJson = classes.map( (_class) => {
          return _.pick(_class, ['_id', 'code', 'name']);
        });
        cb(finalJson);
      })
      .catch((err) => {
          throw err;
      });
    },
    getById: (id, cb) => {
      let foundClass = Class.findOne({ '_id': id }).then((_class) => {
        if (!_class) {
          let msg = `no class found with id of ${id}`;
          return cb(JSON.stringify(msg));
        }
        let classJson = _.pick(_class, ['_id', 'code', 'name']);
        cb(classJson);
      })
        .catch((err) => {
          if (err) throw err;
        });
    },
    post: ({code, name}, cb) => {
      let _class = new Class ({
        code,
        name
      }).save()
      cb();
    }
  }
}