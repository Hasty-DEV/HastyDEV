import crypto from "crypto";

export const generatePinCode = (): string => {
  const code: string = crypto.randomBytes(3).toString("hex").toUpperCase();
  return code;
};
