import { Request, Response } from "express";
import User from "../../models/User/User.model";
import VerificationCode from "../../models/Email/EmailVerifyCode.model";
import { logError, logInfo } from "../../../utils/Logger/Logger";

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
            console.log("Código de verificação válido");
            logInfo("Código de verificação válido", res, 200);
          } else {
            console.log("Código de verificação expirado");
            logError("Código de verificação expirado", res, 400);
          }
        } else {
          console.log("Código de verificação inválido");
          logError("Código de verificação inválido", res, 400);
        }
      } else {
        console.log("Usuário não encontrado");
        logError("Usuário não encontrado", res, 404);
      }
    } catch (error) {
      console.error("Erro ao verificar o código de verificação:", error);
      logError("Erro ao verificar o código de verificação: " + error, res, 500);
    }
  }
}

export default new EmailCodeVerification();
