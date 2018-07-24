const Category = require('../models').Category;

const createCategory = (name, userId) => Category.create({
        name,
        UserId: userId
    });

const getCategories = userId => Category.findAll({
        where: { UserId: userId }
    });

const getCategoryByName = name => Category.findAll({
        where: { name: name }
    });

const updateCategory = async (id, newName) => {
    const category = await Category.findOne({
        where: { id: id }
    });
    return category
        .updateAttributes({
            name: newName
        })
        .then(c => {
            return c;
        });
};

const destroyCategory = id => Category.destroy({
    where: { id: id }
});

module.exports = {
    createCategory,
    getCategories,
    getCategoryByName,
    updateCategory,
    destroyCategory
};
