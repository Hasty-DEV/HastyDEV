import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import ResetPassCode from "../../models/ResetPass/ResetPassCode.model";
import User from "../../models/User/User.model";
import logger from "../../../utils/Logger/Logger";
import validationRules from "../Validation/validations.controller";

class resetPassVerification {
  public async resetPassword(req: Request, res: Response): Promise<void> {
    await Promise.all(
      validationRules.resetPasswordValidationRules.map((rule) => rule.run(req))
    );
    const { email, resetCode, newPassword } = req.body;

    try {
      const code = await ResetPassCode.findOne({
        where: {
          resetCode: resetCode,
        },
      });

      if (!code) {
        logger.error("Código de redefinição de senha inválido");
        res.status(400).send("Código de redefinição de senha inválido");
        return;
      }

      if (new Date() > code.expiresAt) {
        logger.error("Código de redefinição de senha expirou");
        res.status(400).send("Código de redefinição de senha expirou");
        return;
      }

      const user = await User.findOne({ where: { email } });

      if (user) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await user.update({
          password: hashedPassword,
        });

        await code.destroy();

        logger.info("Senha redefinida com sucesso");
        res.status(200).send("Senha redefinida com sucesso");
      } else {
        logger.error("Usuário não encontrado");
        res.status(404).send("Usuário não encontrado");
      }
    } catch (err) {
      logger.error("Erro ao redefinir a senha: " + err);
      res.status(500).send("Erro ao redefinir a senha");
    }
  }
}

export default new resetPassVerification();
