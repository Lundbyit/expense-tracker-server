'use strict';
module.exports = (sequelize, DataTypes) => {
    var Category = sequelize.define(
        'Category',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {}
    );
    Category.associate = function(models) {
        Category.hasMany(models.Transaction, {
            foreignKey: 'transactionId'
        });
        Category.belongsTo(models.User, {
            foreignKey: 'UserId'
        });
    };
    return Category;
};
