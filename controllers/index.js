const models = require('../models/index');

module.exports = {
  teachers: {
    get: (req, res) => {
      models.teachers.get( (err, teachers) => {
        let payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          teachers,
        }
        res.send(payload);
      });
    },
    getById: (req, res) => {
      let id = req.params.id;
      models.teachers.getById(id, (err, teacher) => {
        if (!teacher) {
          let payload = {
            success: err ? false : true,
            err: JSON.stringify(err)
          }
          res.status(404).end(JSON.stringify(payload));
          return;
        }
        let { name, email, _id } = teacher;
        let payload = {
          success: err ? false : true,
          _id,
          name,
          email,
          err: JSON.stringify(err)
        }
        res.send(payload);
      });
    },
    post: (req, res) => {
      let { name, email } = req.body;
      models.teachers.post({ name, email }, (err, id) => {
        let payload = {
          success: err ? true : false,
          id,
          err: JSON.stringify(err)
        }
        res.status(201).end(JSON.stringify(payload));
      });
    }
  },
  students: {
    get: (req, res) => {
      models.students.get( (err, students) => {
          let payload = {
          success: err ? false : true,
          err: JSON.stringify(err),
          students,
        }
        res.send(payload);
      });
    },
    getById: (req, res) => {
      let id = req.params.id;
      models.students.getById(id, (err, student) => {
        if (!student) {
          let payload = {
            success: err ? false : true,
            err: JSON.stringify(err)
          }
          res.status(404).end(JSON.stringify(payload));
          return;
        }
        let { name, email, _id, classes } = student;
        let payload = {
          success: true,
          id: _id,
          name,
          email,
          classes,
          err: JSON.stringify(err)
        }
        res.send(payload);
      });
    },
    post: (req, res) => {
      let { name, email, classes } = req.body;
      models.students.post({ name, email, classes }, (err, id) => {
        let payload = {
          success: err ? false : true,
          id,
          err: err
        }
        res.status(201).end(JSON.stringify(payload));
      });
    }
  },
  classes: {
    get: (req, res) => {
      models.classes.get( (err, classes) => {
        let payload = {
          success: err ? false : true,
          err: err,
          classes,
        }
        res.send(payload);
      });
    },
    getById: (req, res) => {
      let id = req.params.id;
      models.classes.getById(id, (err, _class) => {
        if (!_class) {
          let payload = {
            success: err ? false : true,
            err: err
          }
          res.status(404).end(JSON.stringify(payload));
          return;
        }
        let { code, name } = _class;
        let payload = {
          success: err ? false: true,
          code,
          name,
          err: err
        }
        res.send(payload);
      });
    },
    post: (req, res) => {
      let { code, name } = req.body;
      models.classes.post({ code, name }, (err, id) => {
        let payload = {
          success: err ? true : false,
          id,
          err: JSON.stringify(err)
        }
        res.status(201).end(JSON.stringify(payload))
      });
    }
  }
}