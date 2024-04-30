export type ResetPassCodeAttributes = {
    resetCodeId?: number;
    userId: number;
    resetCode: string;
    expiresAt: Date;
    createdAt: Date;
}