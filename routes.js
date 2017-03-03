const apiController = require('./controllers/api');
const clientController = require('./controllers/client');
const router = require('express').Router();

//Connect controller methods to their corresponding routes
/*
 * CLIENT - ROUTES
 */
router.get('/', clientController.get);

/*
 * API - ROUTES
 */ 
router.get('/teachers', apiController.teachers.get);
router.get('/teachers/:id', apiController.teachers.getById);
router.post('/teachers', apiController.teachers.post);

router.get('/students', apiController.students.get);
router.get('/students/:id', apiController.students.getById);
router.put('/students/:id/editClasses', apiController.students.editClasses);
router.post('/students', apiController.students.post);

router.get('/classes', apiController.classes.get);
router.get('/classes/:id', apiController.classes.getById);
router.get('/classes', apiController.classes.post);







module.exports = router;