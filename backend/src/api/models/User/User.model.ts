import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../../config/database/MySQL/MySQL";


interface UserAttributes {
  userid: number;
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  lockUntil?: Date | null;
  loginAttempts?: number | null;
  isVerified?: boolean;
  role: 'admin' | 'user' | 'empresa';
}

interface UserCreationAttributes extends Optional<UserAttributes, "userid"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public userid!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public first_name!: string;
  public last_name!: string;
  public lockUntil?: Date | null;
  public loginAttempts?: number | null;
  public isVerified?: boolean;
  public role!: 'admin' | 'user' | 'empresa'; 

  static associate(models: any) {
    this.hasMany(models.Post, { foreignKey: "userid", as: "posts" });
  }
}

User.init(
  {
    userid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  
 
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user', 
  },


    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lockUntil: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    loginAttempts: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false,
  }
);

export default User;
