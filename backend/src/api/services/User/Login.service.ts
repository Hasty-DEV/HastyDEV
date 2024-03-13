import { Request, Response } from "express";
import User from "../../models/User/User.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Token from "../../models/Token/Token.model";
import { InitializeLevel } from "../../services/Level/InitializeLevel.service";
import LoginHistory from "./LoginHistory.service";
import ExpForLogin from "../Exp/ExpForLogin.service";
import logger from "../../../utils/Logger/Logger";

const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 15 * 60 * 1000;

const LoginService = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });

  if (!user) {
    logger.error("Usuário/Senha incorreta");
    res.status(401).json({ error: "Usuário/Senha incorreta" });
    return;
  }

  if (!user.isVerified) {
    logger.error("Conta não verificada. Por favor, verifique sua conta antes de fazer o login.");
    res.status(403).json({
      error: "Conta não verificada. Por favor, verifique sua conta antes de fazer o login.",
    });
    return;
  }

  if (user.lockUntil && user.lockUntil.getTime() > Date.now()) {
    logger.error("Conta bloqueada");
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

    await InitializeLevel(user_id);
    await LoginHistory(user_id);
    await ExpForLogin.VerifyAndIncrement(user_id);

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
    logger.error("Usuário/Senha incorreta");
    res.status(401).json({ error: "Usuário/Senha incorreta" });
    return;
  }
};

export default LoginService;
