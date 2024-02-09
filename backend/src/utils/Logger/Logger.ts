import pino from "pino";
import { Response } from "express";

const logger = pino();

function logError(message: string, res: Response, statusCode: number = 500): void {
  logger.error(message);
  res.status(statusCode).json({ error: message });
}

function logInfo(message: string, res: Response, statusCode: number = 200): void {
  logger.info(message);
  res.status(statusCode).json({ info: message });
}

export { logError, logInfo };
