const models = require('../models/index');


module.exports = {
  teachers: {
    get: (req, res) => {
      models.teachers.get( (data) => {
        res.send(data);
      });
    },
    getById: (req, res) => {
      let id = req.params.id;
      models.teachers.getById(id, (data) => {
        res.send(data);
      });
    },
    post: (req, res) => {

    }
  }
}