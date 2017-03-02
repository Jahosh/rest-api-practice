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
        res.send(teacher);
      });
    },
    post: (req, res) => {
      let { name, email } = req.body;
      models.teachers.post({ name, email }, () => {
        res.status(201).end(JSON.stringify({}));
      });
    }
  }
}