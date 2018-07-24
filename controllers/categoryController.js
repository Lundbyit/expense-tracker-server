//https://stackoverflow.com/questions/37746156/passportjs-extract-user-from-isauthenticated-function
//Get user from session, if we use passport maybe in req.user.userId
const categoryService = require('../services').categoryService;

const getCategories = async (req, res) => {
    const userId = req.body.userId; //Get from session
    try {
        const categories = await categoryService.getCategories(userId);
        res.status(200).send(categories);
    } catch (error) {
        res.status(400).send(error);
    }
}

const createCategory = async (req, res) => {
    const userId = req.body.userId; //Get from session
    const name = req.body.name; //Validate name, has to be uniqe for that user
    try {
        const category = await categoryService.createCategory(name, userId);
        res.status(200).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
}

const updateCategory = async (req, res) => {
    const categoryId = req.body.categoryId;
    const newName = req.body.name;
    try {
        const category = await categoryService.updateCategory(categoryId, newName);
        res.status(200).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
}

const destroyCategory = async (req, res) => {
    const categoryId = req.body.categoryId;

    try {
        await categoryService.destroyCategory(categoryId);
        res.status(200).send(categoryId);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    createCategory,
    getCategories,
    updateCategory,
    destroyCategory
}