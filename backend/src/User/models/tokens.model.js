const { Sequelize } = require('sequelize');
const sequelize = require('../../Db'); // Substitua por sua conexão com o banco de dados

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
