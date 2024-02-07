const { Sequelize } = require('sequelize');
const sequelize = require('../../Db'); // Substitua por sua conexão com o banco de dados
const User = require('./user.model')

const Token = sequelize.define('Token', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User, // nome do modelo de usuário
      key: 'userid', // nome da chave primária na tabela de usuários
      onDelete: 'CASCADE' // Adiciona ação de cascata para deletar tokens associados quando um usuário for deletado
    },
  },
  token: {
    type: Sequelize.STRING(255),
    collate: 'utf8mb4_unicode_ci',
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
}, {
  tableName: 'tokens', // Nome da tabela no banco de dados
  timestamps: true, // Adicione as colunas "createdAt" e "updatedAt"
});

module.exports = Token;
