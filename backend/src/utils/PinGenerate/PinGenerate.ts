import crypto from "crypto";

function generatePinCode(): string {
  const code: string = crypto.randomBytes(3).toString("hex").toUpperCase();
  return code;
}

export { generatePinCode };
