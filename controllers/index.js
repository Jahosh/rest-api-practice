const models = require('../models/index');


module.exports = {
  teachers: {
    get: (req, res) => {
      models.teachers.get((data) => {
        res.send(data);
      });
    },
    post: (req, res) => {

    }
  }
}