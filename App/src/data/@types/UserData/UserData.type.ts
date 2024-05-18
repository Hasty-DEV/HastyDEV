export type UserDataTypes = {
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  username?: string;
  userPerfil?: {
    userId: number;
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    github?: string;
    whatsapp?: string;
    aboutMe?: string;
  };
  level?: {
    level: string;
    exp: string;
    expNeeded: string;
  };
};
