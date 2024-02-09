import { Request, Response } from "express";
import User from "../../models/User.model";
import EmailVerifyCode, {
  EmailVerifyCodeAttributes,
} from "../../models/EmailVerifyCode.model";
import { logError, logInfo } from "../../../utils/Logger/Logger";

async function emailVerification(req: Request, res: Response): Promise<void> {
  const { verificationCode, email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      const code = (await EmailVerifyCode.findOne({
        where: { userId: user.userid, code: verificationCode },
      })) as EmailVerifyCodeAttributes | null;

      if (code) {
        const currentTime = new Date();
        const codeTime = code.createdAt;
        if (codeTime) {
          const timeDifference = currentTime.getTime() - codeTime.getTime();
          const codeExpirationTime = 10 * 60 * 1000; // 10 minutos em milissegundos
          if (timeDifference <= codeExpirationTime) {
            user.isVerified = true;
            await user.save();
            logInfo("Código de verificação válido", res, 200);
          } else {
            logError("Código de verificação expirado", res, 400);
          }
        }
      } else {
        logError("Código de verificação inválido", res, 400);
      }
    } else {
      logError("Usuário não encontrado", res, 404);
    }
  } catch (err) {
    logError("Erro ao verificar o código de verificação: " + err, res, 500);
  }
}

export default emailVerification;
