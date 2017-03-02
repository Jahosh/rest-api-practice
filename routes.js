const controller = require('./controllers');
const router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/teachers/:id', controller .teachers.getById);
router.get('/teachers', controller.teachers.get);
router.post('/teachers', controller.teachers.post);




module.exports = router;