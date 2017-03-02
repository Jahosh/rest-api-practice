const mongoose = require('mongoose');
const Teacher = require('./teacher');
const Student = require('./student');
const Class = require('./class');
const _ = require('lodash');

module.exports = {
  teachers: {
    get: (cb) => {
      let teachers = Teacher.find({}).then((teachers) => {
        let teacherJson = teachers.map( (teacher) => {
          return _.pick(teacher, ['_id', 'name', 'email']);
        });
        cb(null, teacherJson);
      })
      .catch((err) => {
        cb(err, null);
      });
    },
    getById: (id, cb) => {
      let teacher = Teacher.findOne({'_id': id }).then( (teacher) =>{
        if (!teacher) {
          let msg = `no teacher found with id of ${id}`;
          return cb(msg, null);
        }
        let teacherJson = _.pick(teacher, ['_id', 'name', 'email']);
        cb(null, teacherJson);
      })
      .catch( (err) => {
        cb(err, null);
      });
    },
    post: ({name, email}, cb) => {
      let teacher = new Teacher({
        name,
        email
      }).save( (err, teacherRecord) => {
        if (err) {
          cb(err, null);
        }
        cb(null, teacherRecord._id);
      });
    }
  },
  students: {
    get: (cb) => {
      let students = Student.find({}).then( (students) => {
        let finalJson = students.map( (student) => {
           return _.pick(student, ['_id', 'name', 'email', 'classes']);
        });
        cb(null, finalJson);
      })
      .catch( (err) => {
        cb(err, null);
      });

    },
    getById: (id, cb) => {
      let student = Student.findOne({'_id': id }).then( (student) =>{
        if (!student) {
          let msg = `no student found with id of ${id}`;
          return cb(msg, null);
        }
        let studentJson = _.pick(student, ['_id', 'name', 'email', 'classes']);
        cb(null, studentJson);
      })
      .catch( (err) => {
        cb(err, null);
      });
    },
    post: ({name, email, classes=[] }, cb) => {
      let confirmedClasses = [];
      let count = 0

      //Handle when no classes on initial submit
      if (classes.length === 0) {
        let student = new Student({
          name,
          email
        }).save((err, student) => {
          if (err) {
            cb(err, null);
          }
          cb(null, student._id);
        });
      }

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
            }).save((err, student) => {
              if (err) {
                cb(err, null);
              }
              cb(null, student._id);
            });
          }
        });
      });
    }
  },
  classes: {
    get: (cb) => {
      let classes = Class.find({}).then((classes) => {
        let classesJson = classes.map( (_class) => {
          return _.pick(_class, ['_id', 'code', 'name']);
        });
        cb(null, classesJson);
      })
      .catch((err) => {
          cb(err, null);
      });
    },
    getById: (id, cb) => {
      let foundClass = Class.findOne({ '_id': id }).then((_class) => {
        if (!_class) {
          let msg = `no class found with id of ${id}`;
          return cb(msg, null);
        }
        let classJson = _.pick(_class, ['_id', 'code', 'name']);
        cb(null, classJson);
      })
        .catch((err) => {
          cb(err, null);
        });
    },
    post: ({code, name}, cb) => {
      let _class = new Class ({
        code,
        name
      }).save((err, _class) => {
        if (err) {
          cb(err, null);
        }
        cb(null, _class._id);
      });
    }
  }
}