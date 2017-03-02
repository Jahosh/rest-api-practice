const controller = require('./controllers');
const router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/teachers', controller.teachers.get);
router.get('/teachers/:id', controller.teachers.getById);
router.post('/teachers', controller.teachers.post);

router.get('/students', controller.students.get);
router.get('/students/:id', controller.students.getById);
router.post('/students', controller.students.post);




module.exports = router;