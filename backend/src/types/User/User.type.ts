export interface UserAttributes {
    userid: number;
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