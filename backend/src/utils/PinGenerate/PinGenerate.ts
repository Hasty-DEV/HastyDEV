import { randomBytes } from "crypto";

const PIN_CODE_LENGTH = 3;

export const generatePinCode = (): string => {
  try {
    const code: string = randomBytes(PIN_CODE_LENGTH).toString("hex").toUpperCase();
    return code;
  } catch (error) {
    console.error("Erro ao gerar código PIN:", error);
    throw error;
  }
};