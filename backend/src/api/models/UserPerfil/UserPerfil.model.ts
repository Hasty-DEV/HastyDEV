import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../../loaders/sequelize/sequelize';

export interface UserPerfilAttributes {
  userId?: number;
  instagram?: string | null;
  facebook?: string | null;
  linkedin?: string | null;
  github?: string | null;
  whatsapp?: string | null;
  aboutMe?: string | null;
}

class UserPerfil extends Model<UserPerfilAttributes> implements UserPerfilAttributes {
  public userId?: number;
  public instagram!: string | null;
  public facebook!: string | null;
  public linkedin!: string | null;
  public github!: string | null;
  public whatsapp!: string | null;
  public aboutMe!: string | null;
}

UserPerfil.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'userid',
      },
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    github: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    whatsapp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    aboutMe: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'UserPerfil',
    tableName: 'UserPerfil',
    timestamps: false,
  }
);

export default UserPerfil;
