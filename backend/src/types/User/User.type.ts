import { UserPerfilAttributes } from "../../api/models/UserPerfil/UserPerfil.model";

export type UserAttributes = {
    userid?: number;
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    lockUntil?: Date | null;
    loginAttempts?: number | null;
    isVerified?: boolean;
    role: "admin" | "user" | "business";
}

export interface UserAttributesWithProfile extends UserAttributes {
    userPerfil?: UserPerfilAttributes | null;
  }
  