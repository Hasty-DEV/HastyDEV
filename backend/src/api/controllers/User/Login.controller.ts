import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { logError } from "../../../utils/Logger/Logger";
import User from "../../models/User/User.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Token from "../../models/Token/Token.model";

const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 15 * 60 * 1000;

class LoginController {
  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        logError("Erros de validação no registro", res, 400);
        return;
      }

      const user = await User.findOne({ where: { username } });

      if (!user) {
        res.status(401).json({ error: "Usuário/Senha incorreta" });
        return;
      }

      if (user.lockUntil && user.lockUntil.getTime() > Date.now()) {
        res.status(403).json({ error: "Conta bloqueada" });
        return;
      }

      if (user.loginAttempts === MAX_LOGIN_ATTEMPTS) {
        const lockTime = new Date(Date.now() + LOCK_TIME);
        user.lockUntil = lockTime;
      }

      if (user.loginAttempts === MAX_LOGIN_ATTEMPTS + 1) {
        user.loginAttempts = 0;
      }

      const senhaCorreta = await bcrypt.compare(password, user.password);

      if (senhaCorreta) {
        user.loginAttempts = 0;

        const user_id = user.dataValues.userid;
        const secret = process.env.SECRET;
        if (secret) {
          const token = jwt.sign({ id: user_id }, secret);

          const newToken = new Token({ user_id, token });

          newToken.createdAt = new Date();
          newToken.updatedAt = new Date();
          
          await newToken.save();

          res.json({ id: user_id, token });
        }
      } else {
        if (user.loginAttempts) user.loginAttempts += 1;
        await user.save();
        res.status(401).json({ error: "Usuário/Senha incorreta" });
        return;
      }
    } catch (error) {
      console.error("Erro no login:", error);
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

export default new LoginController();
