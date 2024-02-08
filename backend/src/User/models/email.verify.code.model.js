const Sequelize = require('sequelize');
const sequelize = require('../../Db');
const User = require("../models/user.model")

const VerificationCode = sequelize.define('verificationCode', {
  codeId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User, // nome do modelo de usuário
      key: 'userid', // nome da chave primária na tabela de usuários
      onDelete: 'CASCADE' // Adiciona ação de cascata para deletar tokens associados quando um usuário for deletado
    },
  },
  code: {
    type: Sequelize.STRING(6), 
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = VerificationCode;
