'use strict';
module.exports = (sequelize, DataTypes) => {
    var Transaction = sequelize.define(
        'Transaction',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: DataTypes.STRING,
            type: {
                type: DataTypes.ENUM('income', 'expense'),
                allowNull: false
            },
            amount: {
                type: DataTypes.DECIMAL,
                allowNull: false
            }
        },
        {}
    );

    Transaction.associate = models => {
        Transaction.belongsTo(models.Category, {
            foreignKey: 'categoryId',
        });
    };
    return Transaction;
};
