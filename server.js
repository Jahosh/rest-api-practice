const express = require('express');
const mockData = require('./seed');
const mongoose = require('mongoose');
const morgan = require('morgan');
const parser = require('body-parser');
const cors = require('cors');

//router
const router = require('./routes.js');
const app = express();

//logging & parsing
app.use(morgan('dev'));
app.use(parser.json());
app.use(cors());
app.use(express.static('./client'));

//Cors preFlight
app.options('8', cors());

//Set up routes
app.use('/', router);
app.use('/api', router);

app.listen(3000, () => {
  console.log('API listening on port 3000');
});