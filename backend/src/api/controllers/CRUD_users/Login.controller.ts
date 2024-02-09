import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/User.model";
import Token from "../../models/Tokens.model";
import { validationResult } from "express-validator";

const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 15 * 60 * 1000;

async function login(req: Request, res: Response): Promise<void> {
  try {
    const { username, password } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.error("Erros de validação no registro");
      res.status(400).json({ error: "Erros de validação no registro" });
      return;
    }

    // Buscar o usuário pelo nome de usuário
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
      user.lockUntil = new Date(Date.now() + LOCK_TIME);
    }

    if (user.loginAttempts === MAX_LOGIN_ATTEMPTS + 1) {
      user.loginAttempts = 0;
    }

    // Comparar a senha fornecida com a senha armazenada no banco de dados
    const senhaCorreta = await bcrypt.compare(password, user.password);

    if (senhaCorreta) {
      user.loginAttempts = 0;

      const user_id = user.userid;
      const secret = process.env.SECRET as string; // Certifique-se de que process.env.SECRET é do tipo string
      const token = jwt.sign({ id: user_id }, secret);

      const newToken = new Token({ user_id, token });
      await newToken.save();

      // Enviar o ID do usuário e o token como resposta JSON
      res.json({ id: user_id, token });
    } else {
      user.loginAttempts += 1;
      await user.save();
      res.status(401).json({ error: "Usuário/Senha incorreta" });
    }
  } catch (err) {
    console.error("Erro ao consultar o banco de dados:", err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

export { login };
