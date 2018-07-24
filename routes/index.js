const express = require('express');
const router = express.Router();
const users = require('./users');
const categories = require('./categories');

router.use('/users', users);
router.use('/category', categories)

module.exports = router;