import { DataTypes, Model, Sequelize } from 'sequelize';

// Defina o modelo de usuário excluído (UserDel)
class UserDel extends Model {
  public deletedid!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public first_name!: string;
  public last_name!: string;
  public deleted_at!: Date;

  // Adicione métodos de classe ou associações aqui

  // Sequelize precisa ser inicializado antes de chamar init
  static initialize(sequelize: Sequelize) {
    this.init({
      deletedid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Valor padrão para a data atual
      },
    }, {
      sequelize,
      modelName: 'userdel',
      timestamps: false,
    });
  }
}

export default UserDel;
