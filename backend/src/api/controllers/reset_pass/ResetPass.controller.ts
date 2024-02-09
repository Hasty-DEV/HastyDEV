import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import User from "../../models/User.model";
import ResetPassCode from "../../models/ResetPasscode.model";
import { resetPasswordValidationRules } from "../validations/Validations.controller";
import { logError, logInfo } from "../../../utils/Logger/Logger";

async function resetPassword(req: Request, res: Response): Promise<void> {
  const { email, resetCode, newPassword } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors
      .array()
      .map((error) => error.msg)
      .join("; ");
    logError(errorMessages, res, 400);
    return;
  }

  try {
    const code = await ResetPassCode.findOne({
      where: {
        resetCode: resetCode,
      },
    });

    if (!code) {
      logError("Código de redefinição de senha inválido", res, 400);
      return;
    }

    if (new Date() > code.expiresAt) {
      logError("Código de redefinição de senha expirou", res, 400);
      return;
    }

    const user = await User.findOne({ where: { email } });

    if (user) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await user.update({
        password: hashedPassword,
      });

      await code.destroy();

      logInfo("Senha redefinida com sucesso", res, 200);
    } else {
      logError("Usuário não encontrado", res, 404);
    }
  } catch (err) {
    logError("Erro ao redefinir a senha: " + err, res, 500);
  }
}

export { resetPasswordValidationRules, resetPassword };
