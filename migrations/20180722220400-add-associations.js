'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Transactions',
        'CategoryId',
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'Categories',
                key:'id'
            }
        }
    ).then(() => {
        return queryInterface.addColumn(
            'Categories',
            'UserId',
            {
                type: Sequelize.UUID,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }
        )
    }).then(() => {
        return queryInterface.addColumn(
            'Transactions',
            'UserId',
            {
                type: Sequelize.UUID,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }
        )
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Transactions',
        'CategoryId'
    ).then(() => {
        queryInterface.removeColumn(
            'Categories',
            'UserId'
        )
    }).then(() => {
        queryInterface.removeColumn(
            'Transactions',
            'UserId'
        )
    })
  }
};
