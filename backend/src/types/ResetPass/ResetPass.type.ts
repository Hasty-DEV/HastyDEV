export interface ResetPassCodeAttributes {
    resetCodeId?: number;
    userId: number;
    resetCode: string;
    expiresAt: Date;
    createdAt: Date;
}