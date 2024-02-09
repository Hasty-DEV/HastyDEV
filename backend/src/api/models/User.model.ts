import { DataTypes, Model, Sequelize } from "sequelize";

class User extends Model {
  public userid!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public first_name!: string;
  public last_name!: string;
  public lockUntil!: Date | null;
  public loginAttempts!: number;
  public isVerified!: boolean;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        userid: {
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
        lockUntil: {
          type: DataTypes.DATE,
        },
        loginAttempts: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        modelName: "user",
        timestamps: false,
      }
    );
  }
}

export default User;
