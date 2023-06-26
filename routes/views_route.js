const route = require('express').Router();
const { homepage, edit } = require('../controllers/views_controllers');

route.get('/homepage', homepage);
route.get('/edit/:id', edit);

module.exports = route;