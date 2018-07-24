var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.create);
router.delete('/destroy', userController.delete);

module.exports = router;
