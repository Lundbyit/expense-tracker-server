'use strict';
//https://www.codementor.io/mayowa.a/how-to-build-a-simple-session-based-authentication-system-with-nodejs-from-scratch-6vn67mcy3
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                autoIncrement: false
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            hooks: {
                beforeCreate: (user) => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
            instanceMethods: {
                validPassword: (password) => bcrypt.compareSync(password, this.password)
            }
        }
    );

    User.associate = function(models) {
        User.hasMany(models.Category, {
            onDelete: 'cascade'
        });
        User.hasMany(models.Transaction, {
            onDelete: 'cascade'
        })
    };
    return User;
};

const hashPassword = (user, options, callback) => {
    bcrypt.hash(user.get('password'), 10, (err, hash) => {
        if (err) return callback(err);
        user.set('password', hash);
        return callback(null, options);
    });
};
