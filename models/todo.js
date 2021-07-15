const Sequelize = require('sequelize');
const sequelize = require('../src/database/connection');

module.exports = global.sequelize.define('Todos', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  userId:{
    type: Sequelize.STRING  
  },
  value: {
    type: Sequelize.STRING,
  },
  finished: {
    type: Sequelize.BOOLEAN,
  },
  userID: Sequelize.INTEGER(11),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});