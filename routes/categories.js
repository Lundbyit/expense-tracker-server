var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/all', categoryController.getCategories); //Change to get when we can extract user from session
router.post('/', categoryController.createCategory);
router.put('/', categoryController.updateCategory);
router.delete('/', categoryController.destroyCategory)

module.exports = router;