import { Request, Response } from "express";
import User from "../../models/User/User.model";
import VerificationCode from "../../models/Email/EmailVerifyCode.model";
import logger from "../../../utils/Logger/Logger";

class EmailCodeVerification {
  public async codeVerification(req: Request, res: Response): Promise<void> {
    const { verificationCode, email } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (user) {
        const code = await VerificationCode.findOne({
          where: { userId: user.userid, code: verificationCode },
        });

        if (code) {
          const currentTime = new Date();
          const codeTime = code.createdAt;
          const timeDifference = currentTime.getTime() - codeTime.getTime();
          const codeExpirationTime = 10 * 60 * 1000;

          if (timeDifference <= codeExpirationTime) {
            user.isVerified = true;
            await user.save();
            logger.info("Código de verificação válido");
            res.status(200).send("Código de verificação válido");
          } else {
            logger.error("Código de verificação expirado");
            res.status(400).send("Código de verificação expirado");
          }
        } else {
          logger.error("Código de verificação inválido");
          res.status(400).send("Código de verificação inválido");
        }
      } else {
        logger.error("Usuário não encontrado");
        res.status(404).send("Usuário não encontrado");
      }
    } catch (error) {
      logger.error("Erro ao verificar o código de verificação: " + error);
      res.status(500).send("Erro ao verificar o código de verificação");
    }
  }
}

export default new EmailCodeVerification();
