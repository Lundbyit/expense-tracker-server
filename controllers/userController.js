const categoryService = require('../services').categoryService;
const userService = require('../services').userService;

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body.username, req.body.password);
        await categoryService.createCategory('uncategorized', user.id); //All users should have an uncategorized category
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteUser = async (req, res) => {
    const username = req.body.username; //get from session
    try {
        await userService.deleteUser(username);
        res.status(200).send(username)
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    create: createUser,
    delete: deleteUser
};
