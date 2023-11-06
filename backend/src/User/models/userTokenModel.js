const Sequelize = require('sequelize');
const sequelize = require('../../Db');

const UserToken = sequelize.define('Token', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  token: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
}, {
  tableName: 'tokens',
  timestamps: false
});

module.exports = UserToken;
