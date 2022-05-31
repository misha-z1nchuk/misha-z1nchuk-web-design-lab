const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Users extends Model {}

Users.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Users',
    timestamps: false,
    scopes: {

    }
});

module.exports = Users;
