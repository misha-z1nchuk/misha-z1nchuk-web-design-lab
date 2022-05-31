const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Comments extends Model {
}

Comments.init({
    id: { allowNull: false, autoIncrement: true,  primaryKey: true, type: DataTypes.INTEGER },
    body: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER, references: { model: 'Users', key: 'id' } },
    postId: { type: DataTypes.INTEGER, references: { model: 'Posts', key: 'id' } },
    createdAt: { allowNull: false,  type: DataTypes.DATE },
    updatedAt: { allowNull: false,  type: DataTypes.DATE }
}, {
    sequelize,
    modelName: 'Comments'
}
);

module.exports = Comments;
