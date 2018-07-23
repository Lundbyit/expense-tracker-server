const express = require('express');
const router = express.Router();
const test = require('./test');
const users = require('./users');

router.use('/', test);
router.use('/users', users);

module.exports = router;