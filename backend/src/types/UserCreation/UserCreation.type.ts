import { Optional } from "sequelize";
import { UserAttributes } from "../User/User.type";

export interface UserCreationAttributes extends Optional<UserAttributes, "userid"> { }
