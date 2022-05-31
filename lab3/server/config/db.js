const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('blog', 'user', 'pass', {
    dialect: 'sqlite',
    host   : './dev.sqlite'
})

module.exports = sequelize;