const express = require('express');
const { homepage, edit } = require('../controllers/views.controller');

const router = express.Router();

router.get('/', homepage);
router.get('/views/edit/:id', edit);

module.exports = router;