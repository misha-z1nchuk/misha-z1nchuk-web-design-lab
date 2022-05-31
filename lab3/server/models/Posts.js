const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Posts extends Model {
}

Posts.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    body: {
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: 'Posts'
}
);

module.exports = Posts;
