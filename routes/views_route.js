const route = require('express').Router();
const { homepage } = require('../controllers/views_controllers');

route.get('/homepage', homepage);

module.exports = route;