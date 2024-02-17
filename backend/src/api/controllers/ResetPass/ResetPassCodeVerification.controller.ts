import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import ResetPassCode from '../../models/ResetPass/ResetPassCode.model';
import User from "../../models/User/User.model";
 
import { logError, logInfo } from "../../../utils/Logger/Logger";

import validationRules from "../Validation/ validations.controller";


class resetPassVerification{

public async resetPassword(req: Request, res: Response): Promise<void> {

  await Promise.all(validationRules.resetPasswordValidationRules.map(rule => rule.run(req)))
  const { email, resetCode, newPassword } = req.body;

  
const errors = validationResult(req);



if (!errors.isEmpty()) {
  const errorMessages = errors.array().map(error => error.msg);
  res.send(`Erros de validação no resete de senha: ${errorMessages.join(', ')}`);
  return;
}


  try {
    const code = await ResetPassCode.findOne({
      where: {
        resetCode: resetCode,
      },
    });

    if (!code) {
      logError('Código de redefinição de senha inválido', res, 400);
      return;
    }

    if (new Date() > code.expiresAt) {
      logError('Código de redefinição de senha expirou', res, 400);
      return;
    }

    const user = await User.findOne({ where: { email } });

    if (user) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await user.update({
        password: hashedPassword,
      });

      await code.destroy();

      logInfo('Senha redefinida com sucesso', res, 200);
    } else {
      logError('Usuário não encontrado', res, 404);
    }
  } catch (err) {
    logError('Erro ao redefinir a senha: ' + err, res, 500);
  }
}
}

export default new resetPassVerification();
