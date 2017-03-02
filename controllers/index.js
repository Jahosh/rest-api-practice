const models = require('../models/index');

module.exports = {
  teachers: {
    get: (req, res) => {
      models.teachers.get( (teachers) => {
        let payload = {
          success: true,
          err: null,
          teachers,
        }
        res.send(payload);
      });
    },
    getById: (req, res) => {
      let id = req.params.id;
      models.teachers.getById(id, (teacher) => {
        let { name, email } = teacher;
        if (!name || !email) {
          let errMsg = teacher;
          res.status(404).end(errMsg);
          return;
        }
        let payload = {
          success: true,
          name,
          email,
          err: null
        }
        res.send(payload);
      });
    },
    post: (req, res) => {
      let { name, email } = req.body;
      models.teachers.post({ name, email }, () => {
        res.status(201).end(JSON.stringify({}));
      });
    }
  },
  students: {
    get: (req, res) => {
      models.students.get( (students) => {
          let payload = {
          success: true,
          err: null,
          students,
        }
        res.send(payload);
      });
    },
    getById: (req, res) => {
      let id = req.params.id;
      models.students.getById(id, (student) => {
        let { name, email } = student;
        if (!name || !email) {
          let errMsg = student;
          res.status(404).end(errMsg);
          return;
        }
        let payload = {
          success: true,
          name,
          email,
          err: null
        }
        res.send(payload);
      });
    },
    post: (req, res) => {
      let { name, email, classes } = req.body;
      models.students.post({ name, email, classes }, () => {
        res.status(201).end(JSON.stringify({}))
      });
    }
  },
  classes: {
    get: (req, res) => {
      models.classes.get( (classes) => {
        let payload = {
          success: true,
          err: null,
          classes,
        }
        res.send(payload);
      });
    },
    getById: (req, res) => {
      let id = req.params.id;
      models.classes.getById(id, (_class) => {
        let { code, name } = _class;
        if (!code || ! name) {
          let errMsg = _class;
          res.status(404).end(errMsg);
          return;
        }
        let payload = {
          success: true,
          code,
          name,
          err: null
        }
        res.send(payload);
      });
    },
    post: (req, res) => {
      let { code, name } = req.body;
      models.classes.post({ code, name }, () => {
        res.status(201).end(JSON.stringify({}))
      });
    }
  }
}