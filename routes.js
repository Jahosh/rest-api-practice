const controller = require('./controllers');
const router = require('express').Router();


//Connect controller methods to their corresponding routes
router.get('/teachers', controller.teachers.get);




module.exports = router;