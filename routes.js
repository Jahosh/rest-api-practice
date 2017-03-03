const controller = require('./controllers');
const router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/teachers', controller.teachers.get);
router.get('/teachers/:id', controller.teachers.getById);
router.post('/teachers', controller.teachers.post);

router.get('/students', controller.students.get);
router.get('/students/:id', controller.students.getById);
router.put('/students/:id/editClasses', controller.students.editClasses);
router.post('/students', controller.students.post);

router.get('/classes', controller.classes.get);
router.get('/classes/:id', controller.classes.getById);
router.get('/classes', controller.classes.post);







module.exports = router;