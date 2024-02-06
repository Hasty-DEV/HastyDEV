const Sequelize = require('sequelize');
const sequelize = require('../../Db');

// Defina o modelo de usuário excluído (UserDel)
const UserDel = sequelize.define('userdel', {
  deletedid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  first_name: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  deleted_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Valor padrão para a data atual
  },
}, {
  timestamps: false,
});

module.exports = UserDel;
