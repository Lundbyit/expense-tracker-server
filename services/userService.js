const User = require('../models').User;

const createUser = (username, password) => {
    return User.create({
        username: username,
        password: password
    });
};

const deleteUser = (username) => {
    return User.destroy({
        where: { username: username }
    });
}

module.exports = {
    createUser,
    deleteUser
};
