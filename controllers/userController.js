const User = require('../models').User;
const Category = require('../models').Category;

const createUser = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        await Category.create({
            name: 'Unknown Category',
            UserId: user.id
        });

        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    create: createUser
};
