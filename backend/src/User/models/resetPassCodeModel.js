const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../Db');

const resetPassCode = sequelize.define('resetPassCode', {
  resetCodeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  resetCode: {
    type: DataTypes.STRING(32),
    allowNull: false,
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'password_reset_codes', // Nome da tabela no banco de dados
});

module.exports = resetPassCode;
